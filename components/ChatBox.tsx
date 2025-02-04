import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ChatInput } from './ChatInput';
import { UserMessage, UserMessageBubble } from './UserMessageBubble';
import { ChatbotMessage, ChatbotMessageBubble } from './ChatbotMessageBubble';

export type Message = {
  text: string;
  author: 'user' | 'chatbot'
};

const isUserMessage = (message: Message): message is UserMessage => {
    return message.author === 'user';
};

const isChatbotMessage = (message: Message): message is ChatbotMessage => {
    return message.author === 'chatbot';
};

export const Chatbox = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const renderMessages = () => {
    return messages.map((message, index) => {
        if (isUserMessage(message)) {
            return <UserMessageBubble key={index} message={message} />;
        }
        if (isChatbotMessage(message)) {
            return <ChatbotMessageBubble key={index} message={message} />;
        }
    });
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
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
  },
});
