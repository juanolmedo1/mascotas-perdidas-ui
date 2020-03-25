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
    id: '49c74868-15c3-47d3-b35a-73bacc1bac67',
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
      'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s320x320/56412495_2336547096630651_6295553287131234304_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=jJs8DCKfs-4AX8V4Qtb&oh=15fa0461fe42ff230772c6c7a34123dd&oe=5E8AAFE8',
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
