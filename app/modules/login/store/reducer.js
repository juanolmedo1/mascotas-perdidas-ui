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
  profileInfo: {
    id: '52231213-0684-4ce6-aadf-53c5e67af720',
    firstName: 'Juan',
    lastName: 'Olmedo',
    username: 'juan.olmedo',
    dateOfBirth: '15/05/1996',
    ubication: {
      province: {
        id: '06',
        name: 'Buenos Aires'
      },
      location: {
        id: '06056010001',
        name: 'Bahia Blanca'
      }
    },
    email: 'juuan.olmedo@hotmail.com',
    phoneNumber: '+542915079528',
    picture:
      'https://res.cloudinary.com/mascotas-perdidas/image/upload/v1600018604/profile/styvhmo00lwbcheuzjqx.jpg',
    publications: []
  }
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
        requestProfileInProgress: false
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
