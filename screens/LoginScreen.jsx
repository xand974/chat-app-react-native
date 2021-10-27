import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import LogInput from "../components/LogInput";
import { KeyboardAvoidingView, Platform } from "react-native";
//#region Image url
const IMG_URL =
  "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdoaXRlJTIwYmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
//#endregion

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`h-full justify-center items-center`}
    >
      <Image
        source={{ uri: IMG_URL }}
        style={tw`absolute top-0 h-full w-full`}
      />
      <View
        style={tw.style(
          `bg-gray-800 h-4/6 w-4/6 justify-center items-center rounded-xl`,
          {
            shadowColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          }
        )}
      >
        <Text style={tw`text-center text-white text-3xl mb-5`}>
          CHATOSPHERE
        </Text>
        <Text style={tw`text-center text-gray-300 text-sm mb-3 italic`}>
          Entrez dans la matrice
        </Text>
        <LogInput
          onChangeText={(text) => setUsername(text)}
          placeholder="votre pseudo"
        />
        <LogInput
          onChangeText={(text) => setPassword(text)}
          placeholder="mot de passe"
          isPassword={true}
        />
        <View style={tw``}>
          <TouchableOpacity style={tw`mb-6 mt-3 p-3 w-5/6 bg-white rounded-md`}>
            <Text style={tw.style(`text-black text-center`)}>Se Connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={tw`text-white text-center border-b-2`}>
              Créer un compte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
