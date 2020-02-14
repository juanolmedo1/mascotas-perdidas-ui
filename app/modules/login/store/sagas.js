import {
  types,
  fetchLoginFailure,
  fetchLoginSuccess,
} from '@login/store/actions';
import {put, takeLatest, call} from 'redux-saga/effects';
import {login} from '@login/services/LoginService';

const mockedResponse = {
  username: 'test',
  password: 'test',
};

export function* fetchLogin(action) {
  const {payload} = action;
  try {
    yield call(login, payload);
    yield put(fetchLoginSuccess(mockedResponse));
  } catch (error) {
    yield put(fetchLoginFailure(error));
  }
}

export function* fetchLoginSaga() {
  yield takeLatest(types.FETCH_LOGIN__REQUEST, fetchLogin);
}
