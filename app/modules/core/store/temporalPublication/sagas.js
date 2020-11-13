import {
  getTemporalPublicationFailure,
  getTemporalPublicationSuccess,
  types
} from '@core/store/temporalPublication/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import TemporalPublicationService from '@core/services/TemporalPublicationService';

export function* getTemporalPublication(action) {
  const { payload } = action;
  try {
    const temporalPublication = yield call(
      TemporalPublicationService.getTemporalPublication,
      payload
    );
    yield put(getTemporalPublicationSuccess(temporalPublication));
  } catch (error) {
    yield put(getTemporalPublicationFailure(error));
  }
}
export function* getTemporalPublicationSaga() {
  yield takeLatest(
    types.GET_TEMPORAL_PUBLICATION_REQUEST,
    getTemporalPublication
  );
}
