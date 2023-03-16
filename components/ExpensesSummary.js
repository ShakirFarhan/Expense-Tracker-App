import { View, Text, StyleSheet } from 'react-native';
function ExpensesSummary({ timeline, expenses }) {
  let sum = expenses.reduce((sum, expense) => {
    return sum + parseFloat(expense.amount);
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.timeline}>{timeline}</Text>
      <Text style={styles.total}>${sum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9935a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    marginBottom: 9,
  },
  timeline: {
    fontSize: 15,
    letterSpacing: 1,
    color: '#f0f0f0',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0f0f0',
    letterSpacing: 0.75,
  },
});
