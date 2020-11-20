import { types } from '@notifications/store/actions';

const initialState = {
  deletedNotification: false,
  deleteNotificationRequestInProgress: false,
  deleteNotificationFailed: false,
  confirmUserPublication: null,
  confirmUserPublicationRequestInProgress: false,
  confirmUserPublicationFailed: false,
  notificationUserPublication: null,
  notificationUserPublicationRequestInProgress: false,
  notificationUserPublicationFailed: false,
  requestNotificationsInProgress: false,
  requestNotificationsFailed: false,
  newNotification: false,
  newPublication: false,
  updatedPublications: false,
  updatePublicationsInProgress: false,
  updatePublicationsFailed: false,
  userNotifications: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.DELETE_NOTIFICATION_FAILURE:
      return {
        ...state,
        deletedNotification: false,
        deleteNotificationRequestInProgress: false,
        deleteNotificationFailed: true
      };
    case types.DELETE_NOTIFICATION_REQUEST:
      return {
        ...state,
        deletedNotification: false,
        deleteNotificationRequestInProgress: true,
        deleteNotificationFailed: false
      };
    case types.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        deletedNotification: true,
        deleteNotificationRequestInProgress: false,
        deleteNotificationFailed: false
      };
    case types.GET_CONFIRM_USER_PUBLICATION:
      return {
        ...state,
        confirmUserPublication: null,
        confirmUserPublicationRequestInProgress: true,
        confirmUserPublicationFailed: false,
        deletedNotification: false,
        deleteNotificationRequestInProgress: false,
        deleteNotificationFailed: false
      };
    case types.GET_CONFIRM_USER_PUBLICATION__FAILURE:
      return {
        ...state,
        confirmUserPublication: null,
        confirmUserPublicationRequestInProgress: false,
        confirmUserPublicationFailed: true
      };
    case types.GET_CONFIRM_USER_PUBLICATION__SUCCESS:
      return {
        ...state,
        confirmUserPublication: payload.publicationData,
        confirmUserPublicationRequestInProgress: false,
        confirmUserPublicationFailed: false
      };
    case types.GET_NOTIFICATION_USER_PUBLICATION:
      return {
        ...state,
        notificationUserPublication: null,
        notificationUserPublicationRequestInProgress: true,
        notificationUserPublicationFailed: false
      };
    case types.GET_NOTIFICATION_USER_PUBLICATION__FAILURE:
      return {
        ...state,
        notificationUserPublication: null,
        notificationUserPublicationRequestInProgress: false,
        notificationUserPublicationFailed: true
      };
    case types.GET_NOTIFICATION_USER_PUBLICATION__SUCCESS:
      return {
        ...state,
        notificationUserPublication: payload.publicationData,
        notificationUserPublicationRequestInProgress: false,
        notificationUserPublicationFailed: false
      };
    case types.FETCH_USER_NOTIFICATIONS__REQUEST:
      return {
        ...state,
        requestNotificationsInProgress: true,
        requestNotificationsFailed: false
      };
    case types.FETCH_USER_NOTIFICATIONS__FAILURE:
      return {
        ...state,
        requestNotificationsInProgress: false,
        requestNotificationsFailed: true
      };
    case types.FETCH_USER_NOTIFICATIONS__SUCCESS:
      return {
        ...state,
        requestNotificationsInProgress: false,
        requestNotificationsFailed: false,
        userNotifications: payload
      };
    case types.SET_NEW_NOTIFICATION_STATE:
      return {
        ...state,
        newNotification: payload
      };
    case types.SET_NEW_PUBLICATION_STATE:
      return {
        ...state,
        newPublication: payload
      };
    case types.UPDATE_PUBLICATIONS_FAILURE:
      return {
        ...state,
        updatePublicationsFailed: true,
        updatePublicationsInProgress: false,
        updatedPublications: false
      };
    case types.UPDATE_PUBLICATIONS_REQUEST:
      return {
        ...state,
        updatePublicationsFailed: false,
        updatePublicationsInProgress: true,
        updatedPublications: false
      };
    case types.UPDATE_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        updatePublicationsFailed: false,
        updatePublicationsInProgress: false,
        updatedPublications: true
      };
    default:
      return state;
  }
}
