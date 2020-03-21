import { combineReducers } from 'redux';
import newPublication from '@upload/store/reducer';
import publications from '@home/store/reducer';
import session from '@login/store/reducer';
import ubications from '@core/store/ubication/reducer';
import currentPublication from '@core/store/currentPublication/reducer';

export default combineReducers({
  newPublication,
  publications,
  session,
  ubications,
  currentPublication
});
