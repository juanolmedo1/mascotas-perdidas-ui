import { combineReducers } from 'redux';
import currentPublication from '@core/store/currentPublication/reducer';
import newPublication from '@upload/store/reducer';
import publications from '@home/store/reducer';
import refreshments from '@core/store/refreshments/reducer';
import session from '@login/store/reducer';
import ubications from '@core/store/ubication/reducer';
import registration from '@register/store/reducer';

export default combineReducers({
  currentPublication,
  newPublication,
  publications,
  refreshments,
  session,
  ubications,
  registration
});
