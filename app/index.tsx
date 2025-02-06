import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Chatbox } from '@/components/ChatBox';

export default function Index() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Chatbox />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
});
