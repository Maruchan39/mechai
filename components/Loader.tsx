import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 'auto',
  },
});
