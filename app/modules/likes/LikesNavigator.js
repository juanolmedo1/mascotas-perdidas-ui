import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import LikesView from '@likes/views/LikesView';
import PublicationView from '@core/views/PublicationView';

const Stack = createStackNavigator();

const LikesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Likes"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen
        name="Likes"
        component={LikesView}
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

export default LikesNavigator;
