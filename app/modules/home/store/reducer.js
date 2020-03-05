import { types } from '@home/store/actions';

const initialState = {
  requestInProgress: false,
  requestFailed: false,
  data: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_PUBLICATIONS__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };

    case types.FETCH_PUBLICATIONS__FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };

    case types.FETCH_PUBLICATIONS__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        data: payload
      };
    default:
      return state;
  }
}
