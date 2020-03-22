import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UploadView from '@upload/views/UploadView';
import FiltersView from '@upload/views/FiltersView';
import ResponseView from '@upload/views/ResponseView';
import PublicationView from '@core/views/PublicationView';

const Stack = createStackNavigator();

const UploadNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Upload">
      <Stack.Screen
        name="Upload"
        component={UploadView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Filters"
        component={FiltersView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Response"
        component={ResponseView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Publication"
        component={PublicationView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default UploadNavigator;
