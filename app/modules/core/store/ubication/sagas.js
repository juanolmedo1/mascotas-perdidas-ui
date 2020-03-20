import {
  types,
  fetchProvincesSuccess,
  fetchProvincesFailure,
  fetchLocationsFailure,
  fetchLocationsSuccess
} from '@core/store/ubication/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import UbicationService from '@core/services/UbicationsService';

export function* fetchProvinces() {
  try {
    const response = yield call(UbicationService.getProvinces);
    yield put(fetchProvincesSuccess(response));
  } catch (error) {
    yield put(fetchProvincesFailure(error));
  }
}

export function* fetchLocations(action) {
  const { payload } = action;
  try {
    const response = yield call(UbicationService.getLocations, payload);
    yield put(fetchLocationsSuccess(response));
  } catch (error) {
    yield put(fetchLocationsFailure(error));
  }
}

export function* fetchProvincesSaga() {
  yield takeLatest(types.FETCH_PROVINCES__REQUEST, fetchProvinces);
}

export function* fetchLocationsSaga() {
  yield takeLatest(types.FETCH_LOCATIONS__REQUEST, fetchLocations);
}
