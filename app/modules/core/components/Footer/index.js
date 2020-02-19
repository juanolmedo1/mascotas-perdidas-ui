import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeView from '@home/views/HomeView';
import ProfileView from '@profile/views/ProfileView';
import variables from '@styles/variables';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import UploadView from '@upload/views/UploadView';
import LikesView from '@likes/views/LikesView';
import NotificationsView from '@notifications/views/NotificationsView';

const Tab = createBottomTabNavigator();

const Footer = () => {
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
        component={HomeView}
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
        component={LikesView}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconAnt
              name="hearto"
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
        component={UploadView}
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
          )
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
        component={ProfileView}
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

export default Footer;
