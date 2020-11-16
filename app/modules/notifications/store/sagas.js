import { put, takeLatest, call } from 'redux-saga/effects';

import {
  types,
  deleteNotificationFailure,
  deleteNotificationSuccess,
  getConfirmUserPublicationFailure,
  getConfirmUserPublicationSuccess,
  getNotificationUserPublicationFailure,
  getNotificationUserPublicationSuccess,
  fetchNotificationsFailure,
  fetchNotificationsSuccess,
  updatePublicationsFailure,
  updatePublicationsSuccess,
  deleteNotificationRequest
} from '@notifications/store/actions';
import NotificationsService from '@notifications/services/NotificationsService';
import PublicationService from '@core/services/PublicationService';

export function* deleteNotification(action) {
  const { payload } = action;
  try {
    yield call(NotificationsService.deleteNotification, payload);
    yield put(deleteNotificationSuccess());
  } catch (error) {
    yield put(deleteNotificationFailure(error));
  }
}

export function* fetchNotifications(action) {
  const { payload } = action;
  try {
    const userNotifications = yield call(
      NotificationsService.getUserNotifications,
      payload
    );
    yield put(fetchNotificationsSuccess(userNotifications));
  } catch (error) {
    yield put(fetchNotificationsFailure(error));
  }
}

export function* getConfirmUserPublication(action) {
  const { payload } = action;
  try {
    const publicationData = yield call(
      PublicationService.getPublication,
      payload
    );
    yield put(getConfirmUserPublicationSuccess(publicationData));
  } catch (error) {
    yield put(getConfirmUserPublicationFailure(error));
  }
}

export function* getNotificationUserPublication(action) {
  const { payload } = action;
  try {
    const publicationData = yield call(
      PublicationService.getPublication,
      payload
    );
    yield put(getNotificationUserPublicationSuccess(publicationData));
  } catch (error) {
    yield put(getNotificationUserPublicationFailure(error));
  }
}

export function* updatePublications(action) {
  const {
    notificationId,
    lostPublicationId,
    confirmPublicationId,
    lastLatitude,
    lastLongitude,
    isActive
  } = action.payload;
  const lostPublicationPayload = {
    id: lostPublicationId,
    lastLatitude: lastLatitude,
    lastLongitude: lastLongitude
  };
  const confirmPublicationPayload = {
    id: confirmPublicationId,
    isActive: isActive
  };
  try {
    yield call(PublicationService.updatePublication, lostPublicationPayload);
    yield call(PublicationService.updatePublication, confirmPublicationPayload);
    yield put(deleteNotificationRequest(notificationId));
    yield put(updatePublicationsSuccess());
  } catch (error) {
    yield put(updatePublicationsFailure(error));
  }
}

export function* deleteNotificationSaga() {
  yield takeLatest(types.DELETE_NOTIFICATION_REQUEST, deleteNotification);
}

export function* fetchUserNotificationsSaga() {
  yield takeLatest(types.FETCH_USER_NOTIFICATIONS__REQUEST, fetchNotifications);
}

export function* getConfirmUserPublicationSaga() {
  yield takeLatest(
    types.GET_CONFIRM_USER_PUBLICATION,
    getConfirmUserPublication
  );
}

export function* getNotificationUserPublicationSaga() {
  yield takeLatest(
    types.GET_NOTIFICATION_USER_PUBLICATION,
    getNotificationUserPublication
  );
}

export function* updatePublicationsSaga() {
  yield takeLatest(types.UPDATE_PUBLICATIONS_REQUEST, updatePublications);
}
