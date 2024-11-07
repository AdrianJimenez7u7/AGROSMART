import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Menu from './src/screens/Menu';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen name="Menu" component={Menu}  />
    </Stack.Navigator>
  );
};

export default MyStack;
