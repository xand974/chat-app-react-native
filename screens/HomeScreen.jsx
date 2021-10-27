import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full bg-black`}>
      <Text style={tw`text-white`}>Home screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
