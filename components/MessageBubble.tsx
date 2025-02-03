import React from "react";
import { type Message } from "./ChatBox";
import { View, Text } from "react-native";

type MessageBubbleProps = {
    message: Message
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
   <View>
    <Text>{message.text}</Text>
   </View>
  );
};

export default MessageBubble;