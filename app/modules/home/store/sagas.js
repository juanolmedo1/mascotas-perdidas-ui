import {
  types,
  fetchPublicationsSuccess,
  fetchPublicationsFailure
} from '@home/store/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import PublicationService from '@core/services/PublicationService';
import { getFilters } from '@home/store/selectors';
import NavigationService from '@core/utils/navigation';
import {
  getLatitude,
  getLongitude
} from '@app/modules/core/store/ubication/selectors';

export function* fetchPublications() {
  try {
    const filters = yield select(getFilters);
    const latitude = yield select(getLatitude);
    const longitude = yield select(getLongitude);
    const filtersWithUbication = {
      ...filters,
      latitude,
      longitude
    };
    const publications = yield call(
      PublicationService.getPublications,
      filtersWithUbication
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
