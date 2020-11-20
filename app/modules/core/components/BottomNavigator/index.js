import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import React, { useEffect } from 'react';

import HomeNavigator from '@home/HomeNavigator';
import LikesNavigator from '@likes/LikesNavigator';
import NotificationNavigator from '@notifications/NotificationNavigator';
import ProfileNavigator from '@profile/ProfileNavigator';
import UploadNavigator from '@upload/UploadNavigator';
import variables from '@styles/variables';
import styles from '@core/components/BottomNavigator/styles';
import { View } from 'react-native';
import { connect } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import NavigationService from '@core/utils/navigation';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ newNotification }) => {
  useEffect(() => {
    const message = messaging().onNotificationOpenedApp(() => {
      console.log('NOTIFICATION OPENED APP');
      NavigationService.navigate('NotificationNavigator');
    });
    return message;
  }, []);

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
        options={({ route }) => {
          const stackScreenName = route.state
            ? route.state.routes[route.state.index].name
            : null;
          return {
            tabBarVisible:
              stackScreenName !== 'Filters' &&
              stackScreenName !== 'PublicationResolvedNavigator',
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
          };
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
        name="NotificationNavigator"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <IconFeather
                name="bell"
                size={30}
                color={
                  focused
                    ? variables.colors.textOrange
                    : variables.colors.textDarkGrey
                }
              />
              {newNotification && <View style={styles.iconPoint} />}
            </View>
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

const mapStateToProps = state => ({
  newNotification: state.notifications.newNotification
});

export default connect(mapStateToProps)(BottomNavigator);
