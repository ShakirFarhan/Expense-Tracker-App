import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { getDateMinusDays } from '../util/date';
import { getAllExpenses } from '../reducers/expensesSlice';
import Loading from '../ui/Loading';

function ExpensesOutput({ timeline }) {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);
  const isLoading = useSelector((state) => state.expense.isLoading);
  console.log(isLoading);
  const navigation = useNavigation();
  const recentExpenses = expenses.filter((expense) => {
    let expenseDate = new Date(expense.date);
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expenseDate >= date7DaysAgo && expenseDate <= today;
  });
  useEffect(() => {
    dispatch(getAllExpenses());
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        {
          <View style={styles.container}>
            <ExpensesSummary
              timeline={timeline}
              expenses={timeline.includes('7') ? recentExpenses : expenses}
            />
            <ExpensesList
              expenses={timeline.includes('7') ? recentExpenses : expenses}
              onPress={() => navigation.navigate('ManageExpenses')}
            />
          </View>
        }
      </>
    );
  }
}
export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    paddingBottom: 33,
    backgroundColor: '#e1d5c9',
  },
});
