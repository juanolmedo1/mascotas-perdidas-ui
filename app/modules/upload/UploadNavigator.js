import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import variables from '@styles/variables';
import fonts from '@styles/fonts';
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
          headerStyle: {
            elevation: 0
          },
          title: 'Nueva Publicación',
          headerTitleAlign: 'center',
          headerTintColor: variables.colors.textBlack,
          headerTitleStyle: {
            fontSize: fonts.sizes.L,
            ...fonts.weights.semibold,
            letterSpacing: 1,
            color: variables.colors.textBlack
          }
        }}
      />
      <Stack.Screen
        name="Filters"
        component={FiltersView}
        options={{
          title: 'Características',
          headerStyle: {
            elevation: 0
          },
          headerTitleAlign: 'center',
          headerTintColor: variables.colors.textBlack,
          headerTitleStyle: {
            fontSize: fonts.sizes.L,
            ...fonts.weights.semibold,
            letterSpacing: 1,
            color: variables.colors.textBlack
          }
        }}
      />
      <Stack.Screen
        name="Response"
        component={ResponseView}
        options={{
          headerShown: false,
          headerStyle: {
            elevation: 0
          },
          headerTintColor: variables.colors.textOrange,
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Publication"
        component={PublicationView}
        options={{
          title: 'Publicación',
          headerStyle: {
            elevation: 0
          },
          headerTintColor: variables.colors.textOrange,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

export default UploadNavigator;
