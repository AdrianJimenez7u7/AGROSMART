import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/public/Login';
import Test from './Test';
import Menu from './src/pages/public/Menu';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
};

export default MyStack;
