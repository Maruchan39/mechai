import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { ChatInput } from './ChatInput';
import MessagesList from './MessagesList';

export type Message = {
  text: string;
  author: 'user' | 'chatbot';
};

export const Chatbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <View style={styles.container}>
        {messages.length ? (
          <MessagesList messages={messages} />
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
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: '40%',
  },
});
