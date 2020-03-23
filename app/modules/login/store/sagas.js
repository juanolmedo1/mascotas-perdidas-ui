import {
  types,
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
    yield call(UserService.login, payload);
    yield put(fetchLoginSuccess({}));
    NavigationService.navigate('BottomNavigator');
  } catch (error) {
    yield put(fetchLoginFailure(error));
  }
}

export function* fetchLoginSaga() {
  yield takeLatest(types.FETCH_LOGIN__REQUEST, fetchLogin);
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
