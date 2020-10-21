export const types = {
  SET_UBICATION__FAILURE: 'SET_UBICATION__FAILURE',
  SET_UBICATION__SUCCESS: 'SET_UBICATION__SUCCESS'
};

export const setUbicationFailure = error => ({
  payload: error,
  type: types.SET_UBICATION__FAILURE
});

export const setUbicationSuccess = data => ({
  payload: data,
  type: types.SET_UBICATION__SUCCESS
});
