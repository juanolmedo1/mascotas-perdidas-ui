import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UsernameView from '@register/views/UsernameView';
import BasicInformationView from '@register/views/BasicInformationView';
import UbicationView from '@register/views/UbicationView';
import LoginNavigator from '@login/LoginNavigator';
import ResponseView from '@register/views/ResponseView';

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BasicInformationView" headerMode="none">
      <Stack.Screen
        name="BasicInformationView"
        component={BasicInformationView}
      />
      <Stack.Screen name="UbicationView" component={UbicationView} />
      <Stack.Screen name="UsernameView" component={UsernameView} />
      <Stack.Screen name="ResponseView" component={ResponseView} />
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
    </Stack.Navigator>
  );
};

export default RegisterNavigator;
