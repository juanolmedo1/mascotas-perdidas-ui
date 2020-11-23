import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import LoginNavigator from '@login/LoginNavigator';
import BottomNavigator from '@core/components/BottomNavigator';
import { connect } from 'react-redux';
import { getLoggedUser } from '@login/store/actions';
import AuthService from '@login/services/AuthService';
import RNBootSplash from 'react-native-bootsplash';
import { getProfile } from './modules/login/store/selectors';

const Stack = createStackNavigator();

const MainNavigator = ({ fetchLoggedUser, profileInfo }) => {
  const [initialRoute, setInitialRoute] = useState();
  useEffect(() => {
    if (profileInfo || initialRoute === 'LoginNavigator') {
      RNBootSplash.hide({ duration: 250 });
    }
  }, [initialRoute, profileInfo]);

  useEffect(() => {
    const getUserInformation = async () => {
      const accessToken = await AuthService.getAccessToken();
      if (!accessToken) {
        // Usuario deslogueado, ir a la vista de Login
        setInitialRoute('LoginNavigator');
        // setLoading(false);
      } else {
        // Usuario logueado, pedir la info del USER y navegar a Home
        setInitialRoute('BottomNavigator');
        fetchLoggedUser();
      }
    };
    getUserInformation();
  }, [fetchLoggedUser]);

  if (!initialRoute || (!profileInfo && initialRoute === 'BottomNavigator')) {
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
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

const mapDispatchToProps = {
  fetchLoggedUser: getLoggedUser
};

const mapStateToProps = state => ({
  profileInfo: getProfile(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
