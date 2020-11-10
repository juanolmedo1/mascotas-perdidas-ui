import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import HeatmapPublicationsView from '@core/views/HeatmapPublicationsView';
import ProfileView from '@profile/views/ProfileView';
import PublicationView from '@core/views/PublicationView';
import PublicationResolvedMapView from '@core/views/PublicationResolvedView/MapView';
import PublicationResolvedView from '@core/views/PublicationResolvedView';
import PublicationResolvedResponseView from '@core/views/PublicationResolvedView/ResponseView';
import SimilarPublicationsView from '@core/views/SimilarPublicationsView';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileView}
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
        name="PublicationResolvedNavigator"
        component={PublicationResolvedNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="HeatmapPublications"
        component={HeatmapPublicationsView}
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

const PublicationResolvedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PublicationResolved"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="PublicationResolved"
        component={PublicationResolvedView}
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
        name="PublicationResolved_Map"
        component={PublicationResolvedMapView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PublicationResolved_Response"
        component={PublicationResolvedResponseView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
