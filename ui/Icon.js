import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, StyleSheet } from 'react-native';
function Icon({ icon, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export default Icon;
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 17,
    marginRight: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});
