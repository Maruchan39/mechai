import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserMessageBubble, { UserMessage } from './UserMessageBubble';
import { Message } from './ChatBox';
import ChatbotMessageBubble, { ChatbotMessage } from './ChatbotMessageBubble';

type MessagesListProps = {
  messages: Message[];
};

export const MessagesList: React.FC<MessagesListProps> = ({ messages }) => {
  const renderMessages = () => {
    const isUserMessage = (message: Message): message is UserMessage => {
      return message.author === 'user';
    };

    const isChatbotMessage = (message: Message): message is ChatbotMessage => {
      return message.author === 'chatbot';
    };

    return messages.map((message, index) => {
      if (isUserMessage(message)) {
        return <UserMessageBubble key={index} message={message} />;
      }
      if (isChatbotMessage(message)) {
        return <ChatbotMessageBubble key={index} message={message} />;
      }
    });
  };

  return (
    <View style={styles.container}>
      {messages.length ? (
        renderMessages()
      ) : (
        <Text style={styles.h1}>Kuo galiu padėti?</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});

export default MessagesList;
