import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeView from '@home/views/HomeView';
import variables from '@styles/variables';
import fonts from '@styles/fonts';
import PublicationView from '@core/views/PublicationView';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerStyle: {
            elevation: 0
          },
          title: 'Inicio',
          headerTintColor: variables.colors.textBlack,
          headerTitleStyle: {
            fontSize: fonts.sizes.XL,
            ...fonts.weights.regular
          }
        }}
      />
      <Stack.Screen
        name="Publicación"
        component={PublicationView}
        options={{
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

export default HomeNavigator;
