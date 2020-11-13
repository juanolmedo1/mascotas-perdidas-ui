import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React from 'react';

import BreedsView from '@upload/views/BreedsView';
import FiltersView from '@upload/views/FiltersView';
import PublicationView from '@core/views/PublicationView';
import ResponseView from '@upload/views/ResponseView';
import UploadView from '@upload/views/UploadView';
import SelectPublicationView from '@upload/views/SelectPublication';
import CameraView from '@upload/views/CameraView';
import TemporalPhotoView from '@upload/views/TemporalPhotoView';
import TemporalResponseView from '@upload/views/TemporalResponseView';
import TemporalPublicationView from '@core/views/TemporalPublicationView';

const Stack = createStackNavigator();

const UploadNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="SelectPublication"
    >
      <Stack.Screen
        name="SelectPublication"
        component={SelectPublicationView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TemporalPhoto"
        component={TemporalPhotoView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TemporalResponse"
        component={TemporalResponseView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TemporalPublication"
        component={TemporalPublicationView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="CameraView"
        component={CameraView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadView}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Breeds"
        component={BreedsView}
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
      <Stack.Screen
        name="Response"
        component={ResponseView}
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

export default UploadNavigator;
