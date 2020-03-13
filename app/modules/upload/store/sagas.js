import { call, put, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '@upload/store/actionTypes';
import {
  createPublicationFail,
  createPublicationSuccess
} from '@upload/store/actions';
import NewPublicationService from '@upload/services/NewPublicationService';

export function* onPublicationCreated(action) {
  const { newPublication } = action.payload;
  try {
    const similarPublications = yield call(
      NewPublicationService.createPublication,
      newPublication
    );
    yield put(createPublicationSuccess(similarPublications));
  } catch (error) {
    yield put(createPublicationFail(error));
  }
}

export function* onPublicationCreatedSaga() {
  yield takeLatest(
    actionTypes.CREATE_PUBLICATION_REQUEST,
    onPublicationCreated
  );
}
