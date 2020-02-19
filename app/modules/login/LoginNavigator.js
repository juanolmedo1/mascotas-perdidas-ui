import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginView from '@login/views/LoginView';
import Footer from '@core/components/Footer';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginNavigator" headerMode="none">
      <Stack.Screen name="LoginNavigator" component={LoginView} />
      <Stack.Screen name="MainNavigator" component={Footer} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
