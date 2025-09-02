import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ChatInput } from '../components/ChatInput';
import MessagesList from '../components/MessagesList';
import { Message } from '@/api/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Chatbox'>;

export const ChatboxScreen = ({ navigation }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  return (
    <View style={styles.container}>
      {messages.length ? (
        <MessagesList messages={messages} loading={loading} />
      ) : (
        <Text style={styles.h1}>What can I help with?</Text>
      )}
      <ChatInput
        messages={messages}
        setMessages={setMessages}
        setLoading={setLoading}
      />
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
