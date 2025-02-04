import React from "react";
import { type Message } from "./ChatBox";
import { View, Text, StyleSheet } from "react-native";

export type ChatbotMessage = Omit<Message, 'user'> & { author: 'chatbot' };

type ChatbotMessageBubbleProps = {
    message: ChatbotMessage
}

export const ChatbotMessageBubble: React.FC<ChatbotMessageBubbleProps> = ({ message }) => {
  return (
   <View style={styles.container}>
    <Text>{message.text}</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default ChatbotMessageBubble;