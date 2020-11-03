export const types = {
  FETCH_USER_NOTIFICATIONS__FAILURE: 'FETCH_USER_NOTIFICATIONS__FAILURE',
  FETCH_USER_NOTIFICATIONS__REQUEST: 'FETCH_USER_NOTIFICATIONS__REQUEST',
  FETCH_USER_NOTIFICATIONS__SUCCESS: 'FETCH_USER_NOTIFICATIONS__SUCCESS',
  SET_NEW_NOTIFICATION_STATE: 'SET_NEW_NOTIFICATION_STATE'
};

export const fetchNotifications = userId => ({
  payload: { userId },
  type: types.FETCH_USER_NOTIFICATIONS__REQUEST
});

export const fetchNotificationsFailure = error => ({
  payload: error,
  type: types.FETCH_USER_NOTIFICATIONS__FAILURE
});

export const fetchNotificationsSuccess = notifications => ({
  payload: notifications,
  type: types.FETCH_USER_NOTIFICATIONS__SUCCESS
});

export const setNewNotificationState = state => ({
  payload: state,
  type: types.SET_NEW_NOTIFICATION_STATE
});
