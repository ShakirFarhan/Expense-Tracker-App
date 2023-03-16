import { TextInput, View, Text, StyleSheet } from 'react-native';

function Input({ label, textInputVals, style, styleHeight }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, styleHeight]} {...textInputVals} />
    </View>
  );
}
export default Input;
const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    color: '#232325',
    marginBottom: 2,
    fontWeight: 'bold',
    letterSpacing: 0.7,
  },
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 6,
  },
  input: {
    padding: 6,
    backgroundColor: '#232325',
    borderRadius: 6,
    color: 'white',
  },
});
