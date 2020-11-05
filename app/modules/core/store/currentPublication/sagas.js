import {
  types,
  deletePublicationFailure,
  deletePublicationSuccess,
  fetchPublicationSuccess,
  fetchPublicationFailure,
  getHeatmapPublicationsFailure,
  getHeatmapPublicationsSuccess,
  getSimilarPublicationsFailure,
  getSimilarPublicationsSuccess,
  reportPublicationFailure,
  reportPublicationSuccess,
  updatePublicationFailure,
  updatePublicationSuccess
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

export function* getSimilarPublications(action) {
  const { payload } = action;
  try {
    const similarPublications = yield call(
      PublicationService.getMatchingPublications,
      payload
    );
    yield put(getSimilarPublicationsSuccess(similarPublications));
  } catch (error) {
    yield put(getSimilarPublicationsFailure(error));
  }
}

export function* getHeatmapPublications(action) {
  const { payload } = action;
  try {
    const heatmapPublications = yield call(
      PublicationService.getHeatMapPublications,
      payload
    );
    yield put(getHeatmapPublicationsSuccess(heatmapPublications));
  } catch (error) {
    yield put(getHeatmapPublicationsFailure(error));
  }
}

export function* updatePublication(action) {
  const { payload } = action;
  console.log(payload);
  try {
    yield call(PublicationService.updatePublication, payload);
    yield put(updatePublicationSuccess());
    console.log('success');
  } catch (error) {
    console.log(error);
    yield put(updatePublicationFailure(error));
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

export function* getSimilarPublicationsSaga() {
  yield takeLatest(
    types.GET_SIMILAR_PUBLICATIONS_REQUEST,
    getSimilarPublications
  );
}

export function* getHeatMapPublicationsSaga() {
  yield takeLatest(
    types.GET_HEATMAP_PUBLICATIONS_REQUEST,
    getHeatmapPublications
  );
}

export function* updatePublicationSaga() {
  yield takeLatest(types.UPDATE_PUBLICATION_REQUEST, updatePublication);
}
