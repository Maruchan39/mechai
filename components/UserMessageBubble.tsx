import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { type Message } from './ChatBox';

export type UserMessage = Message & { role: 'user' };

type UserMessageBubbleProps = {
  message: UserMessage;
};

export const UserMessageBubble: React.FC<UserMessageBubbleProps> = ({
  message,
}) => {
  return (
    <View style={styles.container}>
      <Text>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 'auto',
    marginBottom: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default UserMessageBubble;
