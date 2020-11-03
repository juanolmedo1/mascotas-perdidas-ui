import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import LoginView from '@login/views/LoginView';
import BottomNavigator from '@core/components/BottomNavigator';
import RegisterNavigator from '@register/RegisterNavigator';
import messaging from '@react-native-firebase/messaging';
import { connect } from 'react-redux';
import { setNewNotificationState } from '@notifications/store/actions';

const Stack = createStackNavigator();

const LoginNavigator = ({ session, setNewNotification }) => {
  const [initialRoute, setInitialRoute] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    messaging().onMessage(() => {
      console.log('Notification in FOREGROUND');
      setNewNotification(true);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from QUIT state');
          if (Object.keys(session.profileInfo).length) {
            //LOGUED
            setInitialRoute('BottomNavigator');
          } else {
            // NOT LOGUED
            setInitialRoute('LoginNavigator');
          }
        }
        setLoading(false);
      });
  }, [initialRoute, session.profileInfo, setNewNotification]);

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="LoginNavigator" component={LoginView} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Screen name="RegisterNavigator" component={RegisterNavigator} />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = {
  setNewNotification: setNewNotificationState
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginNavigator);
