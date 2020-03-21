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
    yield put(fetchPublicationsSuccess(publications));
    yield NavigationService.navigate('Home');
  } catch (error) {
    yield put(fetchPublicationsFailure(error));
  }
}

export function* fetchPublicationsSaga() {
  yield takeLatest(types.FETCH_PUBLICATIONS__REQUEST, fetchPublications);
}
