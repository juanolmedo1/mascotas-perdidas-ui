import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UsernameView from '@register/views/UsernameView';
import BasicInformationView from '@register/views/BasicInformationView';

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BasicInformationView" headerMode="none">
      <Stack.Screen
        name="BasicInformationView"
        component={BasicInformationView}
      />
      <Stack.Screen name="UsernameView" component={UsernameView} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
