import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeView from '@home/views/HomeView';
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
    </Stack.Navigator>
  );
};

export default HomeNavigator;
