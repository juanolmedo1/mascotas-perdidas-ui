import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import FiltersView from '@home/views/FiltersView';
import HomeView from '@home/views/HomeView';
import PublicationView from '@core/views/PublicationView';
import SimilarPublicationsView from '@core/views/SimilarPublicationsView';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
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
        name="SimilarPublicationsNavigator"
        component={SimilarPublicationsNavigator}
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

const SimilarPublicationsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SimilarPublications"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="SimilarPublications"
        component={SimilarPublicationsView}
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

export default HomeNavigator;
