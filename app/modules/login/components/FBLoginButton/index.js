import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';
import NavigationService from '@core/utils/navigation';
import styles from '@login/components/FBLoginButton/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FBLoginButton = () => {
  const responseInfoCallback = (error, result) => {
    if (error) {
      console.log('Error fetching data: ' + error);
    } else {
      console.log(
        'Success fetching data: ' + result.name,
        result.email,
        result.picture,
        result.birthday,
        result.gender
      );
    }
  };

  const getUserData = accessToken => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        httpMethod: 'GET',
        version: 'v2.5',
        accessToken,
        parameters: {
          fields: {
            string: 'email,name,picture,gender,birthday'
          }
        }
      },
      responseInfoCallback
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const handleLogin = async () => {
    const response = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_location',
      'user_hometown',
      'user_birthday',
      'user_gender'
    ]);
    if (response.error) {
      console.log('Login error');
      NavigationService.navigate('LoginNavigator');
    } else {
      if (response.isCancelled) {
        console.log('Login cancelled');
        NavigationService.navigate('LoginNavigator');
      } else {
        console.log('Login successful');
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
          console.log('User data not provided');
          NavigationService.navigate('LoginNavigator');
        }
        const { accessToken } = data;
        getUserData(accessToken);
        NavigationService.navigate('BottomNavigator');
      }
    }
  };
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={handleLogin}
      activeOpacity={0.8}
    >
      <MaterialIcons
        name="facebook"
        size={32}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.text}>Continuar con Facebook</Text>
    </TouchableOpacity>
  );
};

export default FBLoginButton;
