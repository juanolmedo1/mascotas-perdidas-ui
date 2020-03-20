import { call, put, takeLatest, select } from 'redux-saga/effects';

import * as actionTypes from '@upload/store/actionTypes';
import {
  createPublicationFail,
  createPublicationSuccess
} from '@upload/store/actions';
import NewPublicationService from '@upload/services/NewPublicationService';
import NavigationService from '@core/utils/navigation';
import { getCurrentUbication } from '@login/store/selectors';

export function* onPublicationCreated(action) {
  const { newPublication } = action.payload;
  const photosArrayWithOnlyBase64 = newPublication.photosArray.map(
    photoObject => ({ data: photoObject.data, type: photoObject.mime })
  );
  const { province, location } = yield select(getCurrentUbication);
  const newPublicationValues = {
    ...newPublication,
    photosArray: photosArrayWithOnlyBase64,
    locationId: province,
    provinceId: location
  };
  try {
    const similarPublications = yield call(
      NewPublicationService.createPublication,
      newPublicationValues
    );
    yield put(createPublicationSuccess(similarPublications));
  } catch (error) {
    yield put(createPublicationFail(error));
  } finally {
    yield NavigationService.navigate('Response');
  }
}

export function* onPublicationCreatedSaga() {
  yield takeLatest(
    actionTypes.CREATE_PUBLICATION_REQUEST,
    onPublicationCreated
  );
}
