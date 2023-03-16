import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/style';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './store';
import Icon from './ui/Icon';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabCompo() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#e1d5c9' },
        headerTintColor: '#252427',
        tabBarStyle: { backgroundColor: '#e1d5c9' },
        tabBarActiveTintColor: '#b9935a',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          headerRight: () => (
            <Icon
              icon="add"
              color="black"
              size={27}
              onPress={() => navigation.navigate('ManageExpenses')}
            />
          ),
        }}
        component={AllExpenses}
        name="All Expenses"
      />
      <Tab.Screen
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
          headerRight: () => (
            <Icon
              icon="add"
              color="black"
              size={27}
              onPress={() => navigation.navigate('ManageExpenses')}
            />
          ),
        }}
        name="RecentExpenses"
        component={RecentExpenses}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: '#e1d5c9' } }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={BottomTabCompo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
