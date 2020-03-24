import {
  types,
  deletePublicationFailure,
  deletePublicationSuccess,
  fetchPublicationSuccess,
  fetchPublicationFailure,
  reportPublicationFailure,
  reportPublicationSuccess
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

export function* deletePublication(action) {
  const { payload } = action;
  try {
    yield call(PublicationService.deletePublication, payload);
    yield put(deletePublicationSuccess());
  } catch (error) {
    console.log(error);
    yield put(deletePublicationFailure(error));
  }
}

export function* reportPublication(action) {
  const { payload } = action;
  try {
    yield call(PublicationService.reportPublication, payload);
    yield put(reportPublicationSuccess());
  } catch (error) {
    yield put(reportPublicationFailure(error));
  }
}

export function* fetchPublicationSaga() {
  yield takeLatest(types.FETCH_PUBLICATION__REQUEST, fetchPublication);
}

export function* deletePublicationSaga() {
  yield takeLatest(types.DELETE_PUBLICATION_REQUEST, deletePublication);
}

export function* reportPublicationSaga() {
  yield takeLatest(types.REPORT_PUBLICATION_REQUEST, reportPublication);
}
