import { combineReducers } from 'redux';

import currentPublication from '@core/store/currentPublication/reducer';
import favorites from '@likes/store/reducer';
import newPublication from '@upload/store/reducer';
import publications from '@home/store/reducer';
import refreshments from '@core/store/refreshments/reducer';
import registration from '@register/store/reducer';
import session from '@login/store/reducer';
import ubications from '@core/store/ubication/reducer';
import notifications from '@notifications/store/reducer';

export default combineReducers({
  currentPublication,
  favorites,
  newPublication,
  publications,
  registration,
  refreshments,
  session,
  ubications,
  notifications
});
