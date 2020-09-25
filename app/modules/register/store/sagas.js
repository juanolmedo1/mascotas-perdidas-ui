import {
  types,
  registerUserSuccess,
  registerUserFailed
} from '@register/store/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import {
  getUserBasicInformation,
  getUserLoginData,
  getUserUbication,
  getProfilePhoto
} from '@register/store/selectors';
import NavigationService from '@core/utils/navigation';
import UserService from '@login/services/UserService';

export function* registerUser() {
  try {
    const basicInformation = yield select(getUserBasicInformation);
    const ubication = yield select(getUserUbication);
    const loginData = yield select(getUserLoginData);
    const profilePhoto = yield select(getProfilePhoto);
    const userData = {
      ...basicInformation,
      ...ubication,
      ...loginData,
      ...profilePhoto
    };
    yield call(UserService.registerUser, userData);
    yield put(registerUserSuccess());
    yield NavigationService.navigate('ResponseView');
  } catch (error) {
    const arg = error.response.errors[0].extensions.exception.invalidArg;
    const message = error.response.errors[0].message;
    const errorObject = {
      [arg]: message
    };
    yield put(registerUserFailed(errorObject));
  }
}

export function* registerUserSaga() {
  yield takeLatest(types.REGISTER_USER__REQUEST, registerUser);
}
