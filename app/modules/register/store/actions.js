export const types = {
  SET_BASIC_INFORMATION: 'SET_BASIC_INFORMATION',
  SET_LOGIN_DATA: 'SET_LOGIN_DATA',
  SET_PROFILE_PHOTO: 'SET_PROFILE_PHOTO',
  CLEAR_INFORMATION: 'CLEAR_INFORMATION',
  REGISTER_USER__REQUEST: 'REGISTER_USER__REQUEST',
  REGISTER_USER__SUCCESS: 'REGISTER_USER__SUCCESS',
  REGISTER_USER__FAILED: 'REGISTER_USER__FAILED'
};

export const setBasicInformation = userData => ({
  payload: userData,
  type: types.SET_BASIC_INFORMATION
});

export const setLoginData = data => ({
  payload: data,
  type: types.SET_LOGIN_DATA
});

export const setProfilePhoto = data => ({
  payload: data,
  type: types.SET_PROFILE_PHOTO
});

export const registerUser = () => ({
  type: types.REGISTER_USER__REQUEST
});

export const registerUserSuccess = () => ({
  type: types.REGISTER_USER__SUCCESS
});

export const registerUserFailed = error => ({
  payload: error,
  type: types.REGISTER_USER__FAILED
});

export const clearInformation = () => ({
  type: types.CLEAR_INFORMATION
});
