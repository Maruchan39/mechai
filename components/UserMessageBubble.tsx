import React from "react";
import { type Message } from "./ChatBox";
import { View, Text } from "react-native";

export type UserMessage = Omit<Message, 'author'> & { author: 'user' };

type UserMessageBubbleProps = {
    message: UserMessage
}

export const UserMessageBubble: React.FC<UserMessageBubbleProps> = ({ message }) => {
  return (
   <View>
    <Text>{message.text}</Text>
   </View>
  );
};

export default UserMessageBubble;