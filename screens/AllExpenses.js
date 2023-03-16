import { useSelector } from 'react-redux';
import ExpensesOutput from '../components/ExpensesOutput';
function AllExpenses() {
  // const isLoading = useSelector((state) => state.expense.isLoading);
  return <ExpensesOutput timeline="All" />;
}
export default AllExpenses;
