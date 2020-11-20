import {
  types,
  saveNotificationTokenFailure,
  saveNotificationTokenSuccess,
  fetchLoginFailure,
  fetchLoginSuccess,
  fetchUserPublicationsSuccess,
  fetchUserPublicationsFailure,
  getLoggedUserSuccess,
  getLoggedUserFailure,
  getLoggedUserAndNavigate,
  clearLoginStore
} from '@login/store/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import UserService from '@login/services/UserService';
import AuthService from '@login/services/AuthService';
import NavigationService from '@core/utils/navigation';

export function* fetchLogin(action) {
  const { payload } = action;
  try {
    const data = yield call(UserService.login, payload);
    yield put(fetchLoginSuccess());
    yield call(AuthService.setAccessToken, data.accessToken);
    yield put(getLoggedUserAndNavigate());
  } catch (error) {
    const arg = error.response.errors[0].extensions.exception.invalidArg;
    const message = error.response.errors[0].message;
    const errorObject = {
      [arg]: message
    };
    yield put(fetchLoginFailure(errorObject));
  }
}

export function* fetchLoginSaga() {
  yield takeLatest(types.FETCH_LOGIN__REQUEST, fetchLogin);
}

export function* logout() {
  NavigationService.navigate('LoginNavigator');
  NavigationService.reset(0, 'LoginNavigator');
  yield call(AuthService.removeAccessToken);
}

export function* logoutSaga() {
  yield takeLatest(types.LOGOUT, logout);
}

export function* getLoggedUserAndNavigateFn() {
  try {
    const user = yield call(UserService.getLoggedUser);
    yield put(getLoggedUserSuccess(user));
    NavigationService.navigate('BottomNavigator');
    NavigationService.reset(0, 'BottomNavigator');
  } catch (error) {
    yield put(getLoggedUserFailure(error));
  }
}

export function* getLoggedUserAndNavigateSaga() {
  yield takeLatest(
    types.GET_LOGGED_USER_NAVIGATE__REQUEST,
    getLoggedUserAndNavigateFn
  );
}

export function* getLoggedUserFn() {
  try {
    const user = yield call(UserService.getLoggedUser);
    yield put(getLoggedUserSuccess(user));
  } catch (error) {
    yield put(getLoggedUserFailure(error));
  }
}

export function* getLoggedUserSaga() {
  yield takeLatest(types.GET_LOGGED_USER__REQUEST, getLoggedUserFn);
}

export function* saveNotificationToken(action) {
  const { payload } = action;
  try {
    const token = yield call(UserService.saveNotificationToken, payload);
    yield put(saveNotificationTokenSuccess(token));
  } catch (error) {
    yield put(saveNotificationTokenFailure(error));
  }
}

export function* saveNotificationTokenSaga() {
  yield takeLatest(
    types.SAVE_NOTIFICATION_TOKEN__REQUEST,
    saveNotificationToken
  );
}

export function* fetchUserPublications(action) {
  const { payload } = action;
  try {
    const userPublications = yield call(
      UserService.getUserPublications,
      payload
    );
    yield put(fetchUserPublicationsSuccess(userPublications));
  } catch (error) {
    yield put(fetchUserPublicationsFailure(error));
  }
}

export function* fetchUserPublicationsSaga() {
  yield takeLatest(
    types.FETCH_USER_PUBLICATIONS__REQUEST,
    fetchUserPublications
  );
}
