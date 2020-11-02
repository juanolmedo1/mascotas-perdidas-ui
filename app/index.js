import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import reducer from '@store/reducer';
import sagas from '@store/sagas';
import configureStore from '@core/store';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from '@login/LoginNavigator';
import { navigationRef } from '@core/utils/navigation';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const store = configureStore({
  reducer,
  sagas
});

const App = () => {
  const init = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };
  useEffect(() => {
    init()
      .then(() => {
        RNBootSplash.hide({ duration: 250 });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Provider store={store}>
      <StatusBar hidden />
      <NavigationContainer ref={navigationRef}>
        <LoginNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
