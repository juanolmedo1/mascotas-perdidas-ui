import * as actionTypes from './actionTypes';

const initialState = {
  hasToRefreshHome: false,
  hasToRefreshProfile: false,
  hasToRefreshFavorites: false
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
    case actionTypes.SET_HAS_REFRESH_FAVORITES:
      return {
        ...state,
        hasToRefreshFavorites: payload.refreshValue
      };
    default:
      return state;
  }
}
