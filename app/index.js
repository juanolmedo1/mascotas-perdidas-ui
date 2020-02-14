import {Provider} from 'react-redux';
// import navigation from '@core/utils/navigation';
import React from 'react';
import reducer from '@store/reducer';
import sagas from '@store/sagas';
import configureStore from '@core/store';
import Navigator from './Navigator';
import {NavigationContainer} from '@react-navigation/native';

const store = configureStore({
  reducer,
  sagas,
});

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </Provider>
);

export default App;
