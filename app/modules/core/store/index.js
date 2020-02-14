import {applyMiddleware, createStore, compose} from 'redux';
import {each} from 'lodash';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '@app/../ReactotronConfig';

export default function configureStore({reducer, sagas}) {
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      Reactotron.createEnhancer(),
    ),
  );

  each(sagas, saga => {
    sagaMiddleware.run(saga);
  });

  return store;
}
