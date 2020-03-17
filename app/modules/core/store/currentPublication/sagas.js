import {
  types,
  fetchPublicationSuccess,
  fetchPublicationFailure
} from '@core/store/currentPublication/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import PublicationService from '@core/services/PublicationService';

export function* fetchPublication(action) {
  const { payload } = action;
  try {
    const publication = yield call(PublicationService.getPublication, payload);
    yield put(fetchPublicationSuccess(publication));
  } catch (error) {
    yield put(fetchPublicationFailure(error));
  }
}

export function* fetchPublicationSaga() {
  yield takeLatest(types.FETCH_PUBLICATION__REQUEST, fetchPublication);
}
