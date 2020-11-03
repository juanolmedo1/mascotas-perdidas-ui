/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from '@app/index';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent('MascotasPerdidas', () => App);
