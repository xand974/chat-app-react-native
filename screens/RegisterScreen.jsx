import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import LogInput from "../components/LogInput";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { auth } from "../firebase.config";
//#region Image url
const IMG_URL =
  "https://images.unsplash.com/photo-1534296000128-e754fd87f8dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHdoaXRlJTIwYmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
//#endregion

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {}, []);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          displayName: username,
          photoURL= img || "https://www.e-xpertsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        });
      })
      .catch((err) => alert(err.message));
  };

  const navigation = useNavigation();
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
        <Text style={tw`text-center text-white text-2xl mb-3`}>
          CHATOSPHERE
        </Text>
        <Text style={tw`text-center text-gray-300 text-sm mb-3 italic`}>
          S'enregistrer
        </Text>
        <LogInput placeholder="john@gmail.com" />
        <LogInput placeholder="votre pseudo" />
        <LogInput placeholder="mot de passe" isPassword={true} />
        <View style={tw``}>
          <TouchableOpacity
            onPress={() => register()}
            style={tw`mb-6 mt-3 p-3 w-5/6 bg-white rounded-md`}
          >
            <Text style={tw.style(`text-black text-center`)}>
              Créer un compte
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={tw`text-white text-center`}>Se Connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
