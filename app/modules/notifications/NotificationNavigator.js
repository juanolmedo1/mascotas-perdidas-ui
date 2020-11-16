import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import DeletedPublicationView from '@notifications/views/DeletedPublication';
import DobleConfirmationView from '@notifications/views/DobleConfirmation';
import NotificationsView from '@notifications/views/NotificationsView';
import PublicationView from '@core/views/PublicationView';

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
      <Stack.Screen
        name="DobleConfirmation"
        component={DobleConfirmationView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
