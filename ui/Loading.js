import { View, ActivityIndicator, StyleSheet } from 'react-native';
function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
});
