import {
  types,
  fetchPublicationsSuccess,
  fetchPublicationsFailure
} from '@home/store/actions';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import PublicationService from '@core/services/PublicationService';
import { getFilters } from '@home/store/selectors';
import { getCurrentUbication } from '@login/store/selectors';
import NavigationService from '@core/utils/navigation';

export function* fetchPublications() {
  try {
    const filters = yield select(getFilters);
    const currentUbication = yield select(getCurrentUbication);
    const filtersWithUbication = {
      ...filters,
      ...currentUbication
    };
    const publications = yield call(
      PublicationService.getPublications,
      filtersWithUbication
    );
    const mockedPublications = mockupUbication(publications);
    yield put(fetchPublicationsSuccess(mockedPublications));
    yield NavigationService.navigate('Home');
  } catch (error) {
    yield put(fetchPublicationsFailure(error));
  }
}

const mockupUbication = publications => {
  const minLat = -38.7;
  const maxLat = -38.68;
  const minLong = -62.31;
  const maxLong = -62.27;
  const mockPublications = [];
  publications.forEach(publication => {
    const randomLat = Math.random() * (minLat - maxLat) + maxLat;
    const randomLong = Math.random() * (minLong - maxLong) + maxLong;
    const newPublicationMocked = {
      ...publication,
      latitude: randomLat,
      longitude: randomLong
    };
    mockPublications.push(newPublicationMocked);
  });
  return mockPublications;
};

export function* fetchPublicationsSaga() {
  yield takeLatest(types.FETCH_PUBLICATIONS__REQUEST, fetchPublications);
}
