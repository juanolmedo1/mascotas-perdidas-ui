export const types = {
  LOGOUT: 'LOGOUT',
  FETCH_LOGIN__FAILURE: 'FETCH_LOGIN__FAILURE',
  FETCH_LOGIN__REQUEST: 'FETCH_LOGIN__REQUEST',
  FETCH_LOGIN__SUCCESS: 'FETCH_LOGIN__SUCCESS',
  GET_LOGGED_USER_NAVIGATE__REQUEST: 'GET_LOGGED_USER_NAVIGATE__REQUEST',
  GET_LOGGED_USER__FAILURE: 'GET_LOGGED_USER__FAILURE',
  GET_LOGGED_USER__REQUEST: 'GET_LOGGED_USER__REQUEST',
  GET_LOGGED_USER__SUCCESS: 'GET_LOGGED_USER__SUCCESS',
  SAVE_NOTIFICATION_TOKEN__REQUEST: 'SAVE_NOTIFICATION_TOKEN__REQUEST',
  SAVE_NOTIFICATION_TOKEN__SUCCESS: 'SAVE_NOTIFICATION_TOKEN__SUCCESS',
  SAVE_NOTIFICATION_TOKEN__FAILURE: 'SAVE_NOTIFICATION_TOKEN__FAILURE',
  FETCH_USER_PUBLICATIONS__FAILURE: 'FETCH_USER_PUBLICATIONS__FAILURE',
  FETCH_USER_PUBLICATIONS__REQUEST: 'FETCH_USER_PUBLICATIONS__REQUEST',
  FETCH_USER_PUBLICATIONS__SUCCESS: 'FETCH_USER_PUBLICATIONS__SUCCESS'
};

export const saveNotificationToken = data => ({
  payload: data,
  type: types.SAVE_NOTIFICATION_TOKEN__REQUEST
});
export const saveNotificationTokenFailure = error => ({
  payload: error,
  type: types.SAVE_NOTIFICATION_TOKEN__FAILURE
});
export const saveNotificationTokenSuccess = token => ({
  payload: token,
  type: types.SAVE_NOTIFICATION_TOKEN__SUCCESS
});

export const fetchLogin = userData => ({
  payload: userData,
  type: types.FETCH_LOGIN__REQUEST
});
export const fetchLoginFailure = error => ({
  payload: error,
  type: types.FETCH_LOGIN__FAILURE
});
export const fetchLoginSuccess = () => ({
  type: types.FETCH_LOGIN__SUCCESS
});

export const getLoggedUserAndNavigate = () => ({
  type: types.GET_LOGGED_USER_NAVIGATE__REQUEST
});

export const getLoggedUser = () => ({
  type: types.GET_LOGGED_USER__REQUEST
});
export const getLoggedUserFailure = error => ({
  payload: error,
  type: types.GET_LOGGED_USER__FAILURE
});
export const getLoggedUserSuccess = profileData => ({
  payload: profileData,
  type: types.GET_LOGGED_USER__SUCCESS
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

export const logout = () => ({
  type: types.LOGOUT
});
