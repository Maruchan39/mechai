// navigation/RootNavigator.tsx
import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatboxScreen } from '@/screens/ChatboxScreen';
import { LoginScreen } from '@/screens/LoginScreen';
import { SignUpScreen } from '@/screens/SignUpScreen';
import { AuthContext } from '@/context/AuthContext';

export type RootStackParamList = {
  Chatbox: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    // Splash/loading state while reading token from storage
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        // App stack (authenticated)
        <Stack.Screen name="Chatbox" component={ChatboxScreen} />
      ) : (
        // Auth stack (unauthenticated)
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
