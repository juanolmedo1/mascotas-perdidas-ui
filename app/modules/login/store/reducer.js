import {types} from '@login/store/actions';

const initialState = {
  requestInProgress: false,
  requestFailed: false,
  profileInfo: null,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_LOGIN__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true,
      };
    case types.FETCH_LOGIN__FAILURE:
      return {
        ...initialState,
        requestFailed: true,
      };
    case types.FETCH_LOGIN__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        profileInfo: payload,
      };
    default:
      return state;
  }
}
