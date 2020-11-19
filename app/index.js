import { Provider } from 'react-redux';
import React from 'react';
import reducer from '@store/reducer';
import sagas from '@store/sagas';
import configureStore from '@core/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@core/utils/navigation';
import { StatusBar } from 'react-native';
import MainNavigator from './MainNavigator';

const store = configureStore({
  reducer,
  sagas
});

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar hidden />
      <NavigationContainer ref={navigationRef}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
