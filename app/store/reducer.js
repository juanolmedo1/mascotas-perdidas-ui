import { combineReducers } from 'redux';
import session from '@login/store/reducer';
import publications from '@home/store/reducer';
import ubications from '@core/store/ubication/reducer';

export default combineReducers({
  session,
  publications,
  ubications
});
