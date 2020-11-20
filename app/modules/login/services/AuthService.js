import AsyncStorage from '@react-native-async-storage/async-storage';

const setAccessToken = async accessToken => {
  await AsyncStorage.setItem('@access_token', accessToken);
};

const getAccessToken = async () => {
  return AsyncStorage.getItem('@access_token');
};

const removeAccessToken = async () => {
  await AsyncStorage.removeItem('@access_token');
};

export default {
  setAccessToken,
  getAccessToken,
  removeAccessToken
};
