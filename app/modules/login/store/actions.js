export const types = {
  FETCH_LOGIN__FAILURE: 'FETCH_LOGIN__FAILURE',
  FETCH_LOGIN__REQUEST: 'FETCH_LOGIN__REQUEST',
  FETCH_LOGIN__SUCCESS: 'FETCH_LOGIN__SUCCESS',
  FETCH_USER_PUBLICATIONS__FAILURE: 'FETCH_USER_PUBLICATIONS__FAILURE',
  FETCH_USER_PUBLICATIONS__REQUEST: 'FETCH_USER_PUBLICATIONS__REQUEST',
  FETCH_USER_PUBLICATIONS__SUCCESS: 'FETCH_USER_PUBLICATIONS__SUCCESS',
  SET_CURRENT_PROVINCE: 'SET_CURRENT_PROVINCE',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION'
};

export const fetchLogin = userData => ({
  payload: userData,
  type: types.FETCH_LOGIN__REQUEST
});
export const fetchLoginFailure = error => ({
  payload: error,
  type: types.FETCH_LOGIN__FAILURE
});
export const fetchLoginSuccess = profileData => ({
  payload: profileData,
  type: types.FETCH_LOGIN__SUCCESS
});

export const fetchUserPublications = userId => ({
  payload: userId,
  type: types.FETCH_USER_PUBLICATIONS__REQUEST
});
export const fetchUserPublicationsFailure = error => ({
  payload: error,
  type: types.FETCH_USER_PUBLICATIONS__FAILURE
});
export const fetchUserPublicationsSuccess = publications => ({
  payload: publications,
  type: types.FETCH_USER_PUBLICATIONS__SUCCESS
});

export const setCurrentProvince = province => ({
  payload: province,
  type: types.SET_CURRENT_PROVINCE
});

export const setCurrentLocation = location => ({
  payload: location,
  type: types.SET_CURRENT_LOCATION
});
