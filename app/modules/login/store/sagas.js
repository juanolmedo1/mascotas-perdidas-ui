import {
  types,
  saveNotificationTokenFailure,
  saveNotificationTokenSuccess,
  fetchLoginFailure,
  fetchLoginSuccess,
  fetchUserPublicationsSuccess,
  fetchUserPublicationsFailure
} from '@login/store/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import NavigationService from '@core/utils/navigation';
import UserService from '@login/services/UserService';

export function* fetchLogin(action) {
  const { payload } = action;
  try {
    const user = yield call(UserService.login, payload);
    yield put(fetchLoginSuccess(user));
    NavigationService.navigate('BottomNavigator');
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
