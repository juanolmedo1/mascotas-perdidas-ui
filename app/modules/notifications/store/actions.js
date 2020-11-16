export const types = {
  DELETE_NOTIFICATION_FAILURE: 'DELETE_NOTIFICATION_FAILURE',
  DELETE_NOTIFICATION_REQUEST: 'DELETE_NOTIFICATION_REQUEST',
  DELETE_NOTIFICATION_SUCCESS: 'DELETE_NOTIFICATION_SUCCESS',
  GET_CONFIRM_USER_PUBLICATION__FAILURE:
    'GET_CONFIRM_USER_PUBLICATION__FAILURE',
  GET_CONFIRM_USER_PUBLICATION: 'GET_CONFIRM_USER_PUBLICATION',
  GET_CONFIRM_USER_PUBLICATION__SUCCESS:
    'GET_CONFIRM_USER_PUBLICATION__SUCCESS',
  GET_NOTIFICATION_USER_PUBLICATION__FAILURE:
    'GET_NOTIFICATION_USER_PUBLICATION__FAILURE',
  GET_NOTIFICATION_USER_PUBLICATION: 'GET_NOTIFICATION_USER_PUBLICATION',
  GET_NOTIFICATION_USER_PUBLICATION__SUCCESS:
    'GET_NOTIFICATION_USER_PUBLICATION__SUCCESS',
  FETCH_USER_NOTIFICATIONS__FAILURE: 'FETCH_USER_NOTIFICATIONS__FAILURE',
  FETCH_USER_NOTIFICATIONS__REQUEST: 'FETCH_USER_NOTIFICATIONS__REQUEST',
  FETCH_USER_NOTIFICATIONS__SUCCESS: 'FETCH_USER_NOTIFICATIONS__SUCCESS',
  SET_NEW_NOTIFICATION_STATE: 'SET_NEW_NOTIFICATION_STATE',
  SET_NEW_PUBLICATION_STATE: 'SET_NEW_PUBLICATION_STATE',
  UPDATE_PUBLICATIONS_FAILURE: 'UPDATE_PUBLICATIONS_FAILURE',
  UPDATE_PUBLICATIONS_REQUEST: 'UPDATE_PUBLICATIONS_REQUEST',
  UPDATE_PUBLICATIONS_SUCCESS: 'UPDATE_PUBLICATIONS_SUCCESS'
};

export const deleteNotificationFailure = error => ({
  payload: { error },
  type: types.DELETE_NOTIFICATION_FAILURE
});

export const deleteNotificationRequest = id => ({
  payload: { id },
  type: types.DELETE_NOTIFICATION_REQUEST
});

export const deleteNotificationSuccess = () => ({
  type: types.DELETE_NOTIFICATION_SUCCESS
});

export const getConfirmUserPublication = id => ({
  payload: { id },
  type: types.GET_CONFIRM_USER_PUBLICATION
});

export const getConfirmUserPublicationFailure = error => ({
  payload: { error },
  type: types.GET_CONFIRM_USER_PUBLICATION__FAILURE
});

export const getConfirmUserPublicationSuccess = publicationData => ({
  payload: { publicationData },
  type: types.GET_CONFIRM_USER_PUBLICATION__SUCCESS
});

export const getNotificationUserPublication = id => ({
  payload: { id },
  type: types.GET_NOTIFICATION_USER_PUBLICATION
});

export const getNotificationUserPublicationFailure = error => ({
  payload: { error },
  type: types.GET_NOTIFICATION_USER_PUBLICATION__FAILURE
});

export const getNotificationUserPublicationSuccess = publicationData => ({
  payload: { publicationData },
  type: types.GET_NOTIFICATION_USER_PUBLICATION__SUCCESS
});

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

export const setNewPublicationState = state => ({
  payload: state,
  type: types.SET_NEW_PUBLICATION_STATE
});

export const updatePublications = ({
  notificationId,
  lostPublicationId,
  confirmPublicationId,
  lastLatitude,
  lastLongitude,
  isActive
}) => ({
  payload: {
    notificationId,
    lostPublicationId,
    confirmPublicationId,
    lastLatitude,
    lastLongitude,
    isActive
  },
  type: types.UPDATE_PUBLICATIONS_REQUEST
});

export const updatePublicationsFailure = error => ({
  payload: error,
  type: types.UPDATE_PUBLICATIONS_FAILURE
});

export const updatePublicationsSuccess = () => ({
  type: types.UPDATE_PUBLICATIONS_SUCCESS
});
