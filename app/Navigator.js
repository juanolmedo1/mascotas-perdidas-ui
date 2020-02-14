import {createStackNavigator} from '@react-navigation/stack';
import LoginView from '@login/views/LoginView';
import React from 'react';
import variables from '@styles/variables';
import HomeView from '@home/views/HomeView';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: variables.colors.textOrange,
        headerStyle: {
          backgroundColor: variables.colors.backgroundWhite,
        },
      }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};
