import {
  types,
  fetchPublicationsSuccess,
  fetchPublicationsFailure
} from '@home/store/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import PublicationsService from '@home/services/PublicationsService';

export function* fetchPublications(action) {
  const { payload } = action;
  try {
    const publications = yield call(
      PublicationsService.getPublications,
      payload
    );
    yield put(fetchPublicationsSuccess(publications));
  } catch (error) {
    yield put(fetchPublicationsFailure(error));
  }
}

export function* fetchPublicationsSaga() {
  yield takeLatest(types.FETCH_PUBLICATIONS__REQUEST, fetchPublications);
}
