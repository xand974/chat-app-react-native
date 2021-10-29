import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ListItem, Avatar } from "react-native-elements";

export default function ConversationList({ chat }) {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://www.e-xpertsolutions.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chat.chatName}</ListItem.Title>
        <ListItem.Subtitle
          numberOfLines={1}
          ellipsizeMode="tail"
          style={tw`text-gray-400`}
        >
          voici un sous-titre
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
