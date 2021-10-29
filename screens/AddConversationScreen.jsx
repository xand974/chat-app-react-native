import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import tw from "tailwind-react-native-classnames";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../firebase";

export default function AddConversationScreen() {
  const navigation = useNavigation();
  const [userInput, setUserInput] = useState();

  const createChat = async () => {
    try {
      await addDoc(collection(db, "chats"), {
        chatName: userInput,
      }).then(() => {
        navigation.goBack();
      });
    } catch (err) {
      alert(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Ajouter une conversation",
    });
  }, []);
  return (
    <View>
      <Input
        onSubmitEditing={createChat}
        placeholder="entrez un nom"
        onChangeText={(text) => setUserInput(text)}
        leftIcon={() => (
          <View style={tw.style(`mr-2`)}>
            <Icon name="chat" color="black" size={20} />
          </View>
        )}
      />
      <Button
        style={tw.style(`w-3/6 m-auto`)}
        buttonStyle={{ backgroundColor: "#070819", borderRadius: 10 }}
        title="Créer"
        onPress={() => createChat()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
