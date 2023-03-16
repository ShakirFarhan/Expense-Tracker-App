import { useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseForm from '../components/ExpenseForm';
import { Ionicons } from '@expo/vector-icons';
import {
  deleteExpenseData,
  getAllExpenses,
  updateExpenseData,
} from '../reducers/expensesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { postExpense } from '../apis/expenses';
import { postExpenseData } from '../reducers/expensesSlice';
function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();
  const id = route.params?.id;
  const isEditing = !!id;
  const expense = useSelector((state) => state.expense.expenses);
  const activeExpense = expense.find((e) => e.id == id);
  const onCancel = () => {
    navigation.goBack();
  };
  const onDelete = () => {
    dispatch(deleteExpenseData(id)).then(() => dispatch(getAllExpenses()));
    navigation.goBack();
  };
  const onSubmit = (formData) => {
    const data = {
      description: formData.description,
      date: new Date(formData.date).toISOString(),
      amount: formData.amount,
    };
    if (!isEditing) {
      // postExpense(data);
      dispatch(postExpenseData(data)).then(() => dispatch(getAllExpenses()));
    } else {
      dispatch(updateExpenseData({ id, expenseData: data })).then(() =>
        dispatch(getAllExpenses())
      );
    }
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);
  return (
    <View style={styles.container}>
      <ExpenseForm
        type={isEditing ? 'Update' : 'Add'}
        onCancel={onCancel}
        onSubmit={onSubmit}
        defaultValue={activeExpense}
      />
      {isEditing && (
        <View style={styles.iconContainer}>
          <Ionicons
            onPress={onDelete}
            style={styles.icon}
            name="trash"
            size={27}
            color="white"
          />
        </View>
      )}
    </View>
  );
}
export default ManageExpenses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1d5c9',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
    marginTop: 12,
    backgroundColor: '#f53649',
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 35,
  },
});
