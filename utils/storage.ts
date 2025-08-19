import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token: string) {
  if (Platform.OS === 'web') {
    await AsyncStorage.setItem('jwt_token', token);
  } else {
    await SecureStore.setItemAsync('jwt_token', token);
  }
}

export async function getToken() {
  if (Platform.OS === 'web') {
    return await AsyncStorage.getItem('jwt_token');
  } else {
    return await SecureStore.getItemAsync('jwt_token');
  }
}

export async function removeToken() {
  if (Platform.OS === 'web') {
    await AsyncStorage.removeItem('jwt_token');
  } else {
    await SecureStore.deleteItemAsync('jwt_token');
  }
}
