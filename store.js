import { configureStore } from '@reduxjs/toolkit';
import expensesSlice from './reducers/expensesSlice';
export default store = configureStore({
  reducer: {
    expense: expensesSlice,
  },
});
