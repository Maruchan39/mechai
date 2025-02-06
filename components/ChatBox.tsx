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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MessagesList messages={messages} />
      </ScrollView>
      <ChatInput messages={messages} setMessages={setMessages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16
  }
});
