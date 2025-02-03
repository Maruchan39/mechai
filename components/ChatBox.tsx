import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";

export type Message = {
  text: string;
  author: 'user' | 'chatbot'
};

export const Chatbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const renderMessages = () => {
    return messages.map((message, index) => (
      <MessageBubble key={index} message={message}/>
    ));
  };

  console.log(messages);

  return (
    <View style={styles.container}>
      {messages.length ? (
        renderMessages()
      ) : (
        <Text style={styles.h1}>Kuo galiu padėti?</Text>
      )}
      <ChatInput messages={messages} setMessages={setMessages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
  },
  h1: {
    fontSize: 34,
    fontWeight: "bold",
  },
});
