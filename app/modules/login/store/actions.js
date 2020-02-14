export const types = {
  FETCH_LOGIN__FAILURE: 'FETCH_LOGIN__FAILURE',
  FETCH_LOGIN__REQUEST: 'FETCH_LOGIN__REQUEST',
  FETCH_LOGIN__SUCCESS: 'FETCH_LOGIN__SUCCESS',
};

export const fetchLogin = userData => ({
  payload: userData,
  type: types.FETCH_LOGIN__REQUEST,
});
export const fetchLoginFailure = error => ({
  payload: error,
  type: types.FETCH_LOGIN__FAILURE,
});
export const fetchLoginSuccess = profileData => ({
  payload: profileData,
  type: types.FETCH_LOGIN__SUCCESS,
});
