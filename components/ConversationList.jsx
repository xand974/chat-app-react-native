import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ConversationList({ chat }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatScreen", {
          id: chat.id,
          chatName: chat.chatName,
        })
      }
    >
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{
            uri: "https://www.e-xpertsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={tw`font-bold`}>{chat.chatName}</ListItem.Title>
          <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode="tail"
            style={tw`text-gray-400`}
          >
            voici un sous-titre
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
