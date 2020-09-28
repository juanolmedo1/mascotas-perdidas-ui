import * as actionTypes from './actionTypes';

function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export const setHasToRefreshHome = refreshValue =>
  createAction(actionTypes.SET_HAS_REFRESH_HOME, { refreshValue });
export const setHasToRefreshProfile = refreshValue =>
  createAction(actionTypes.SET_HAS_REFRESH_PROFILE, { refreshValue });
export const setHasToRefreshFavorites = refreshValue =>
  createAction(actionTypes.SET_HAS_REFRESH_FAVORITES, { refreshValue });
