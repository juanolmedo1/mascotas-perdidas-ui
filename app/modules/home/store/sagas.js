import {
  types,
  fetchPublicationsSuccess,
  fetchPublicationsFailure
} from '@home/store/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import PublicationService from '@core/services/PublicationService';
import { getProfile } from '@login/store/selectors';

export function* fetchPublications() {
  try {
    const profile = yield select(getProfile);
    const ubication = {
      province: profile.ubication.province.id,
      location: profile.ubication.location.id
    };
    const publications = yield call(
      PublicationService.getPublications,
      ubication
    );
    yield put(fetchPublicationsSuccess(publications));
  } catch (error) {
    yield put(fetchPublicationsFailure(error));
  }
}

export function* fetchPublicationsSaga() {
  yield takeLatest(types.FETCH_PUBLICATIONS__REQUEST, fetchPublications);
}
