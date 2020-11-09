import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import NotificationsView from '@notifications/views/NotificationsView';
import PublicationView from '@core/views/PublicationView';
import DeletedPublicationView from '@notifications/views/DeletedPublication';

const Stack = createStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="Notifications"
        component={NotificationsView}
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
        name="DeletedPublication"
        component={DeletedPublicationView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
