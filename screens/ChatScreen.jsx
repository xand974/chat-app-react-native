import React, { useState } from "react";
import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
export default function ChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { chatName, id } = route.params;
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    const docRef = collection(db, "chats", id, "messages");
    const res = await addDoc(docRef, {
      timestamp: serverTimestamp(),
      username: auth.currentUser.email,
      message: userInput,
    });
    console.log(res);
    Keyboard.dismiss();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chatName,
      headerTitle: () => (
        <View style={tw.style(`flex-row items-center`)}>
          <Avatar
            rounded
            source={{
              uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b7/b3/eb/caption.jpg?w=300&h=300&s=1",
            }}
          />
          <Text style={tw.style(`text-white text-xl ml-2`)}>{chatName}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={tw`flex-row`}>
          <TouchableOpacity>
            <Icon name="phone" color="white" size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="videocamera"
              style={tw`mr-3 ml-3`}
              color="white"
              size={28}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={tw`h-full`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={20}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <ScrollView style={tw`flex-1`}></ScrollView>

          {/* Footer */}
          <View style={tw`flex-row items-center border-t-2 border-gray-200`}>
            <TextInput
              onChangeText={(text) => setUserInput(text)}
              style={tw`h-12 text-xl p-4 w-full `}
              placeholder="votre message"
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity onPress={() => sendMessage()}>
              <FeatherIcon name="send" color="gray" size={28} />
            </TouchableOpacity>
          </View>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
