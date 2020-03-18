import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeView from '@home/views/HomeView';
import variables from '@styles/variables';
import PublicationView from '@core/views/PublicationView';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{
          headerShown: false
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
          headerTintColor: variables.colors.textBlack,
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
