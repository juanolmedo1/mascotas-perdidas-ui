import { types } from '@login/store/actions';

const initialState = {
  requestProfileInProgress: false,
  requestProfileFailed: false,
  requestPublicationsInProgress: false,
  requestPublicationsFailed: false,
  currentUbication: {
    province: '06',
    location: '06056010001'
  },
  requestProfileError: {},
  profileInfo: {}
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
        profileInfo: payload
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
    case types.SET_CURRENT_PROVINCE:
      return {
        ...state,
        currentUbication: {
          ...state.currentUbication,
          province: payload
        }
      };
    case types.SET_CURRENT_LOCATION:
      return {
        ...state,
        currentUbication: {
          ...state.currentUbication,
          location: payload
        }
      };
    default:
      return state;
  }
}
