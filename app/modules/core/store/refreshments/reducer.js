import * as actionTypes from './actionTypes';

const initialState = {
  hasToRefreshHome: false,
  hasToRefreshProfile: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_HAS_REFRESH_HOME:
      return {
        ...state,
        hasToRefreshHome: payload.refreshValue
      };
    case actionTypes.SET_HAS_REFRESH_PROFILE:
      return {
        ...state,
        hasToRefreshProfile: payload.refreshValue
      };
    default:
      return state;
  }
}
