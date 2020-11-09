import { put, takeLatest, call } from 'redux-saga/effects';

import {
  types,
  fetchNotificationsFailure,
  fetchNotificationsSuccess
} from '@notifications/store/actions';
import NotificationsService from '@notifications/services/NotificationsService';

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

export function* fetchUserNotificationsSaga() {
  yield takeLatest(types.FETCH_USER_NOTIFICATIONS__REQUEST, fetchNotifications);
}
