import { StyleSheet, Text, View } from "react-native";
import { ChatInput } from "../components/ChatInput";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Kuo galiu padėti?</Text>
        <ChatInput />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    width: "90%",
    position: 'relative'
  },
  h1: {
    fontSize: 34,
    fontWeight: "bold",
  },
});
