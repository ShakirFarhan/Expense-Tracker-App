import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteExpenseApi,
  getExpenses,
  postExpense,
  updateExpenseApi,
} from '../apis/expenses';
const initialState = {
  expenses: [],
  isLoading: false,
  postError: false,
};
export const getAllExpenses = createAsyncThunk(
  'reducers/getAllExpenses',
  async () => {
    const data = await getExpenses();
    return data;
  }
);
export const postExpenseData = createAsyncThunk(
  'reducers/postExpensesData',
  async (expenseData) => {
    const data = await postExpense(expenseData);
    return data;
  }
);
export const updateExpenseData = createAsyncThunk(
  'reducers/updateExpenseData',
  async ({ id, expenseData }) => {
    const data = await updateExpenseApi(id, expenseData);
    return data;
  }
);

export const deleteExpenseData = createAsyncThunk(
  'reducers/deleteExpenseData',
  async (id) => {
    return await deleteExpenseApi(id);
  }
);

const expensesSlice = createSlice({
  name: 'expense',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllExpenses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllExpenses.fulfilled, (state, { payload }) => {
      state.expenses = payload;
      state.isLoading = false;
    });
    builder.addCase(postExpenseData.pending, (state) => {
      state.postError = true;
    });
    builder.addCase(postExpenseData.fulfilled, (state, { payload }) => {
      state.postError = false;
    });
  },
});
export default expensesSlice.reducer;
export const { addExpenses, deleteExpense, updateExpense } =
  expensesSlice.actions;
