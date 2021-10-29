import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

export default function ChatScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { chatName, id } = route.params;

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
    });
  }, []);

  return (
    <View>
      <Text>This is Chat screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
