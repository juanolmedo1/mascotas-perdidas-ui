import { combineReducers } from 'redux';
import session from '@login/store/reducer';
import publications from '@home/store/reducer';
import ubication from '@core/store/ubication/reducer';

export default combineReducers({
  session,
  publications,
  ubication
});
