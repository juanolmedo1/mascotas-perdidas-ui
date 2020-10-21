import { types } from '@register/store/actions';
import DateUtils from '@core/utils/date';

const initialState = {
  basicInformation: {
    name: '',
    lastname: '',
    dateOfBirth: DateUtils.formatBirthDate(new Date(2000, 0, 1)),
    phone: ''
  },
  loginData: {
    username: '',
    email: '',
    password: ''
  },
  profilePhoto: {
    data: '',
    type: ''
  },
  requestInProgress: false,
  requestFailed: false,
  requestError: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_BASIC_INFORMATION:
      return {
        ...state,
        basicInformation: payload
      };
    case types.SET_LOGIN_DATA:
      return {
        ...state,
        loginData: payload
      };

    case types.SET_PROFILE_PHOTO:
      return {
        ...state,
        profilePhoto: payload
      };
    case types.REGISTER_USER__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };
    case types.REGISTER_USER__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false
      };
    case types.REGISTER_USER__FAILED:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false,
        requestError: payload
      };
    case types.CLEAR_INFORMATION:
      return initialState;
    default:
      return state;
  }
}
