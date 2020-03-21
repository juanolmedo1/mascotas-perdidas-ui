import { types } from '@core/store/currentPublication/actions';

const initialState = {
  requestInProgress: false,
  requestFailed: false,
  data: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_PUBLICATION__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };

    case types.FETCH_PUBLICATION__FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };

    case types.FETCH_PUBLICATION__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        data: payload
      };
    case types.CLEAR_CURRENT_PUBLICATION:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        data: null
      };
    default:
      return state;
  }
}
