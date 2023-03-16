import { View, Pressable, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../constants/style';
import { getFormattedDate } from '../util/date';
function ExpenseItem({ item, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: 'white' }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.flex1}>
            <Text style={styles.description}>{item.item.description}</Text>
            <Text style={styles.date}>{getFormattedDate(item.item.date)}</Text>
          </View>
          <View style={styles.flex2}>
            <Text style={styles.amount}>{item.item.amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default ExpenseItem;
const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#232325',
    borderRadius: 8,

    marginBottom: 18,
    overflow: 'hidden',
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#d6d7da',
  },
  description: {
    color: '#d6d7da',
    fontSize: 15,
  },
  date: {
    color: '#d6d7da',
    fontSize: 12,
  },
  amount: {
    color: GlobalStyles.colors.black,

    fontWeight: 'bold',
  },
  flex2: {
    backgroundColor: '#d6d7da',
    alignItems: 'center',
    padding: 8,
    minWidth: 60,
    borderRadius: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  flex1: {
    rowGap: 3,
  },
});
