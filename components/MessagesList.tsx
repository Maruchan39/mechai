import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import UserMessageBubble, { UserMessage } from './UserMessageBubble';
import { Message } from '../screens/ChatBoxScreen';
import ChatbotMessageBubble, { ChatbotMessage } from './ChatbotMessageBubble';
import Loader from './Loader';

type MessagesListProps = {
  messages: Message[];
  loading: Boolean;
};

export const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  loading,
}) => {
  const renderMessages = () => {
    const isUserMessage = (message: Message): message is UserMessage => {
      return message.role === 'user';
    };

    const isChatbotMessage = (message: Message): message is ChatbotMessage => {
      return message.role === 'assistant';
    };

    return (
      <>
        {messages.map((message, index) => {
          if (isUserMessage(message)) {
            return <UserMessageBubble key={index} message={message} />;
          }
          if (isChatbotMessage(message)) {
            return <ChatbotMessageBubble key={index} message={message} />;
          }
        })}
        {loading && <Loader />}
      </>
    );
  };

  return <ScrollView style={styles.container}>{renderMessages()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    flex: 1,
    padding: 16,
    // bottom: 60,
  },
});

export default MessagesList;
