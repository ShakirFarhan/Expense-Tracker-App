import Input from './Input';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Button from './Button';
import { getFormattedDate } from '../util/date';
function ExpenseForm({ type, onCancel, onSubmit, defaultValue }) {
  const [formData, setFormData] = useState({
    description: defaultValue ? defaultValue.description : '',
    amount: defaultValue ? defaultValue.amount.toString() : '',
    date: defaultValue ? getFormattedDate(defaultValue.date) : '',
  });
  const handleOnChange = (inputIdentifier, inputValue) => {
    setFormData((currData) => {
      return {
        ...currData,
        [inputIdentifier]: inputValue,
      };
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputFlex}>
        <Input
          label="Date"
          textInputVals={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            id: 'date',
            onChangeText: (text) => handleOnChange('date', text),
            value: formData.date,
            placeholderTextColor: '#fff',
            letterSpacing: 1,
          }}
        />
        <Input
          label="Amount"
          textInputVals={{
            id: 'amount',
            onChangeText: (text) => handleOnChange('amount', text),
            keyboardType: 'decimal-pad',
            value: formData.amount,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputVals={{
          placeHolder: 'Description',
          id: 'decription',
          onChangeText: (text) => handleOnChange('description', text),
          value: formData.description,
          multiline: true,
        }}
        style={{ flex: 0 }}
        styleHeight={{ minHeight: 100, textAlignVertical: 'top' }}
      />
      <View style={styles.buttons}>
        <Button buttonStyle={{ backgroundColor: '#50483b' }} onPress={onCancel}>
          Cancel
        </Button>
        <Button
          buttonStyle={{ backgroundColor: '#c2964d' }}
          onPress={() => onSubmit(formData)}
        >
          {type}
        </Button>
      </View>
    </View>
  );
}
export default ExpenseForm;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 14,
  },
  inputFlex: {
    flexDirection: 'row',
  },
});
