import { types } from '@notifications/store/actions';

const initialState = {
  requestNotificationsInProgress: false,
  requestNotificationsFailed: false,
  newNotification: false,
  newPublication: false,
  userNotifications: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
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
    default:
      return state;
  }
}