import React, { useState } from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { Message } from "./ChatBox";
import { getMockChatbotResponse } from "../utils/mock/getMockChatbotResponse";

type SetMessagesState = React.Dispatch<React.SetStateAction<Message[]>>;

type ChatInputProps = {
  messages: Message[];
  setMessages: SetMessagesState;
};

export const ChatInput: React.FC<ChatInputProps> = ({
  messages,
  setMessages,
}) => {
  const [text, setText] = useState<string>("");

  const handleSend = () => {

    const userMessage: Message = {
      text: text,
      author: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setText("");

    const chatbotMessage = getMockChatbotResponse() as Message;
    setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.textInput}
        placeholder="Užduok klausimą"
      />
      <Pressable
        onPress={handleSend}
        style={styles.sendButton}
        disabled={!text.trim()}
      >
        <Text style={styles.sendButtonText}>Siųsti</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
