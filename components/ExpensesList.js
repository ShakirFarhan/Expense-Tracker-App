import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import ExpenseItem from './ExpensesItem';
function ExpensesList({ expenses }) {
  const navigation = useNavigation();
  function ExpenseComponent(item) {
    const handleOnPress = () => {
      navigation.navigate('ManageExpenses', { id: item.item.id });
    };
    return <ExpenseItem item={item} onPress={handleOnPress} />;
  }

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={ExpenseComponent}
        keyExtractor={(e) => e.id}
      />
    </View>
  );
}
export default ExpensesList;
