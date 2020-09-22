import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginView from '@login/views/LoginView';
import BottomNavigator from '@core/components/BottomNavigator';
import RegisterNavigator from '@register/RegisterNavigator';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginNavigator" headerMode="none">
      <Stack.Screen name="LoginNavigator" component={LoginView} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="RegisterNavigator" component={RegisterNavigator} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
