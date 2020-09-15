import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ProfileView from '@profile/views/ProfileView';
import PublicationView from '@core/views/PublicationView';
import SimilarPublicationsView from '@core/views/SimilarPublicationsView';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
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
        name="SimilarPublications"
        component={SimilarPublicationsView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
