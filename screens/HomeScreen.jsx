import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import ConversationList from "../components/ConversationList";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import Icon from "react-native-vector-icons/AntDesign";
import { signOut } from "@firebase/auth";
export default function HomeScreen() {
  const navigation = useNavigation();

  const logout = async () => {
    try {
      await signOut(auth);
      navigation.replace("LoginScreen");
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Conversations",
      headerLeft: () => (
        <View>
          <TouchableOpacity>
            <Image
              style={tw.style(`h-8 w-8 rounded-full`, {
                resizeMode: "contain",
              })}
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity onPress={() => logout()}>
            <Icon name="logout" color="black" size={20} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={tw`h-full`}>
      <ScrollView>
        <ConversationList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
