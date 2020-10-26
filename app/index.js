import { Provider } from 'react-redux';
import React from 'react';
import reducer from '@store/reducer';
import sagas from '@store/sagas';
import configureStore from '@core/store';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from '@login/LoginNavigator';
import { navigationRef } from '@core/utils/navigation';
import { StatusBar } from 'react-native';

const store = configureStore({
  reducer,
  sagas
});

const App = () => (
  <Provider store={store}>
    <StatusBar hidden />
    <NavigationContainer ref={navigationRef}>
      <LoginNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
