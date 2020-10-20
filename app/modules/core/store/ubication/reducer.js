import { types } from '@core/store/ubication/actions';

const initialState = {
  latitude: null,
  longitude: null,
  error: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_UBICATION__SUCCESS:
      return {
        ...state,
        latitude: payload.latitude,
        longitude: payload.longitude
      };
    case types.SET_UBICATION__FAILURE:
      return {
        ...initialState,
        error: payload.error
      };
    default:
      return state;
  }
}
