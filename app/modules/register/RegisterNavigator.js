import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';
import UsernameView from '@register/views/UsernameView';
import BasicInformationView from '@register/views/BasicInformationView';
import LoginNavigator from '@login/LoginNavigator';
import ResponseView from '@register/views/ResponseView';

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BasicInformationView"
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="BasicInformationView"
        component={BasicInformationView}
      />
      <Stack.Screen name="UsernameView" component={UsernameView} />
      <Stack.Screen name="ResponseView" component={ResponseView} />
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
