import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeView from '@home/views/HomeView';
import variables from '@styles/variables';
import PublicationView from '@core/views/PublicationView';
import FiltersView from '@home/views/FiltersView';

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
      <Stack.Screen
        name="Filters"
        component={FiltersView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
