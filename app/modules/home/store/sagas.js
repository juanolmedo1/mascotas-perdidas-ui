import {
  types,
  fetchPublicationsSuccess,
  fetchPublicationsFailure
} from '@home/store/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import PublicationService from '@core/services/PublicationService';
import { getFilters } from '@home/store/selectors';
import { getProfile } from '@login/store/selectors';
import NavigationService from '@core/utils/navigation';

export function* fetchPublications() {
  try {
    let filters = yield select(getFilters);
    const { province, location } = filters;
    if (!province || !location) {
      const profile = yield select(getProfile);
      filters = {
        ...filters,
        province: profile.ubication.province.id,
        location: profile.ubication.location.id
      };
    }
    const publications = yield call(
      PublicationService.getPublications,
      filters
    );
    yield put(fetchPublicationsSuccess(publications));
    yield NavigationService.navigate('Home');
  } catch (error) {
    yield put(fetchPublicationsFailure(error));
  }
}

export function* fetchPublicationsSaga() {
  yield takeLatest(types.FETCH_PUBLICATIONS__REQUEST, fetchPublications);
}
