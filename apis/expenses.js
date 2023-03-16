import axios from 'axios';
const URL = 'https://react-native-course-39a0c-default-rtdb.firebaseio.com';
export const postExpense = async (expenseData) => {
  try {
    const { data } = await axios.post(`${URL}/expenses.json`, expenseData);
    return data;
  } catch (error) {
    console.log('error in postExpense api');
  }
};

export const getExpenses = async () => {
  try {
    const { data } = await axios.get(`${URL}/expenses.json`);
    const expenses = [];
    for (const key in data) {
      const expense = {
        id: key,
        description: data[key].description,
        date: data[key].date,
        amount: data[key].amount,
      };
      expenses.push(expense);
    }
    console.log(expenses);
    return expenses;
  } catch (error) {
    console.log('error in getExpenses api');
  }
};
export const updateExpenseApi = async (id, expenseData) => {
  try {
    return await axios.put(`${URL}/expenses/${id}.json`, expenseData);
  } catch (error) {
    console.log('error in update expense api');
    console.log(error);
  }
};
export const deleteExpenseApi = async (id) => {
  try {
    return await axios.delete(`${URL}/expenses/${id}.json`);
  } catch (error) {
    console.log('error in delete expense api');
  }
};
