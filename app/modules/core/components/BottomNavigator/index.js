import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';

import HomeNavigator from '@home/HomeNavigator';
import LikesNavigator from '@likes/LikesNavigator';
import NotificationsView from '@notifications/views/NotificationsView';
import ProfileNavigator from '@profile/ProfileNavigator';
import UploadNavigator from '@upload/UploadNavigator';
import variables from '@styles/variables';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: variables.colors.backgroundWhite,
        activeTintColor: variables.colors.textOrange,
        showLabel: false,
        style: {
          height: 50,
          backgroundColor: variables.colors.backgroundWhite
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconAnt
              name="home"
              size={30}
              color={
                focused
                  ? variables.colors.textOrange
                  : variables.colors.textDarkGrey
              }
            />
          )
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconAnt
              name="staro"
              size={30}
              color={
                focused
                  ? variables.colors.textOrange
                  : variables.colors.textDarkGrey
              }
            />
          )
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconAnt
              name="pluscircleo"
              size={36}
              color={
                focused
                  ? variables.colors.textOrange
                  : variables.colors.textDarkGrey
              }
            />
          ),
          tabBarVisible: false
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsView}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconFeather
              name="bell"
              size={30}
              color={
                focused
                  ? variables.colors.textOrange
                  : variables.colors.textDarkGrey
              }
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconAnt
              name="user"
              size={30}
              color={
                focused
                  ? variables.colors.textOrange
                  : variables.colors.textDarkGrey
              }
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
