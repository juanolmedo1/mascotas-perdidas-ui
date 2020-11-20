import { types } from '@login/store/actions';

const initialState = {
  requestProfileInProgress: false,
  requestProfileFailed: false,
  requestPublicationsInProgress: false,
  requestPublicationsFailed: false,
  requestProfileError: {},
  saveNotificationTokenInProgress: false,
  saveNotificationTokenFailed: false,
  notificationToken: null,
  requestLoggedUserInProgress: false,
  requestLogguedUserFailed: false,
  profileInfo: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_LOGIN__REQUEST:
      return {
        ...state,
        requestProfileFailed: false,
        requestProfileInProgress: true
      };
    case types.FETCH_LOGIN__FAILURE:
      return {
        ...state,
        requestProfileFailed: true,
        requestProfileInProgress: false,
        requestProfileError: payload
      };
    case types.FETCH_LOGIN__SUCCESS:
      return {
        ...state,
        requestProfileFailed: false,
        requestProfileInProgress: false,
        requestLoggedUserInProgress: true
      };

    case (types.GET_LOGGED_USER__REQUEST,
    types.GET_LOGGED_USER_NAVIGATE__REQUEST):
      return {
        ...state,
        requestLoggedUserInProgress: true,
        requestLogguedUserFailed: false
      };
    case types.GET_LOGGED_USER__FAILURE:
      return {
        ...state,
        requestLoggedUserInProgress: false,
        requestLogguedUserFailed: true,
        profileInfo: payload
      };
    case types.GET_LOGGED_USER__SUCCESS:
      return {
        ...state,
        requestLoggedUserInProgress: false,
        requestLogguedUserFailed: false,
        profileInfo: payload
      };

    case types.SAVE_NOTIFICATION_TOKEN__REQUEST:
      return {
        ...state,
        saveNotificationTokenInProgress: true,
        saveNotificationTokenFailed: false
      };
    case types.SAVE_NOTIFICATION_TOKEN__FAILURE:
      return {
        ...state,
        saveNotificationTokenInProgress: false,
        saveNotificationTokenFailed: true
      };
    case types.SAVE_NOTIFICATION_TOKEN__SUCCESS:
      return {
        ...state,
        saveNotificationTokenInProgress: false,
        saveNotificationTokenFailed: false,
        notificationToken: payload
      };
    case types.FETCH_USER_PUBLICATIONS__REQUEST:
      return {
        ...state,
        requestPublicationsFailed: false,
        requestPublicationsInProgress: true
      };
    case types.FETCH_USER_PUBLICATIONS__FAILURE:
      return {
        ...state,
        requestPublicationsFailed: true,
        requestPublicationsInProgress: false
      };
    case types.FETCH_USER_PUBLICATIONS__SUCCESS:
      return {
        ...state,
        requestPublicationsFailed: false,
        requestPublicationsInProgress: false,
        profileInfo: {
          ...state.profileInfo,
          publications: payload
        }
      };
    default:
      return state;
  }
}
