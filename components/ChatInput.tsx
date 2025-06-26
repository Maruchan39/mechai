import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Pressable, Text } from 'react-native';
import { Message } from './ChatBox';
import { getChatbotResponseFromServer } from '../api/api';
import { UserMessage } from './UserMessageBubble';
import { ChatbotMessage } from './ChatbotMessageBubble';

type SetMessagesState = React.Dispatch<React.SetStateAction<Message[]>>;
type SetLoadingState = React.Dispatch<React.SetStateAction<Boolean>>;

type ChatInputProps = {
  messages: Message[];
  setMessages: SetMessagesState;
  setLoading: SetLoadingState;
};

export const ChatInput: React.FC<ChatInputProps> = ({
  messages,
  setMessages,
  setLoading,
}) => {
  const [text, setText] = useState<string>('');

  const handleSend = async () => {
    setLoading(true);
    const userMessage: UserMessage = {
      content: text,
      role: 'user',
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setText('');

    try {
      const chatbotMessage =
        await getChatbotResponseFromServer(updatedMessages);
      setLoading(false);
      setMessages(prevMessages => [...prevMessages, chatbotMessage]);
    } catch (error) {
      const chatbotMessage: ChatbotMessage = {
        content: 'Sorry, I have encountered an error.',
        role: 'assistant',
      };
      setLoading(false);
      setMessages(prevMessages => [...prevMessages, chatbotMessage]);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.textInput}
        placeholder="Ask anything"
      />
      <Pressable
        onPress={handleSend}
        style={styles.sendButton}
        disabled={!text.trim()}
      >
        <Text style={styles.sendButtonText}>Ask</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
