import {
  types,
  deactivatePublicationFailure,
  deactivatePublicationSuccess,
  deletePublicationFailure,
  deletePublicationSuccess,
  fetchPublicationSuccess,
  fetchPublicationFailure,
  getHeatmapPublicationsFailure,
  getHeatmapPublicationsSuccess,
  getResolvedCandidatesFailure,
  getResolvedCandidatesSuccess,
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

export function* getResolvedCandidates(action) {
  const { payload } = action;
  try {
    const candidates = yield call(
      PublicationService.getMatchingPublications,
      payload
    );
    yield put(getResolvedCandidatesSuccess(candidates));
  } catch (error) {
    yield put(getResolvedCandidatesFailure(error));
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
  try {
    yield call(PublicationService.updatePublication, payload);
    yield put(updatePublicationSuccess());
  } catch (error) {
    yield put(updatePublicationFailure(error));
  }
}

export function* deactivatePublication(action) {
  const { payload } = action;
  try {
    yield call(PublicationService.deactivatePublication, payload);
    yield put(deactivatePublicationSuccess());
  } catch (error) {
    yield put(deactivatePublicationFailure(error));
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

export function* getResolvedCandidatesSaga() {
  yield takeLatest(
    types.GET_RESOLVED_CANDIDATES_REQUEST,
    getResolvedCandidates
  );
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

export function* deactivatePublicationSaga() {
  yield takeLatest(types.DEACTIVATE_PUBLICATION_REQUEST, deactivatePublication);
}
