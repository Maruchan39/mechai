import React from 'react';
import MarkdownIt from 'markdown-it';
import RenderHtml from 'react-native-render-html';
import { View, StyleSheet } from 'react-native';
import { type Message } from './ChatBox';

export type ChatbotMessage = Message & { role: 'assistant' };

type ChatbotMessageBubbleProps = {
  message: ChatbotMessage;
};

const md = MarkdownIt();

export const ChatbotMessageBubble: React.FC<ChatbotMessageBubbleProps> = ({
  message,
}) => {
  const html = md.render(message.content);

  return (
    <View style={styles.container}>
      <RenderHtml source={{ html: html }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default ChatbotMessageBubble;
