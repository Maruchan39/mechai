import React from "react";
import { type Message } from "./ChatBox";
import { View, Text } from "react-native";

export type ChatbotMessage = Omit<Message, 'user'> & { author: 'chatbot' };

type ChatbotMessageBubbleProps = {
    message: ChatbotMessage
}

export const ChatbotMessageBubble: React.FC<ChatbotMessageBubbleProps> = ({ message }) => {
  return (
   <View>
    <Text>{message.text}</Text>
   </View>
  );
};

export default ChatbotMessageBubble;