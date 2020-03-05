import { types } from '@core/store/ubication/actions';

const initialState = {
  provincesInProgress: false,
  provincesFailed: false,
  provinces: [],
  locationsInProgress: false,
  locationsFailed: false,
  locations: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_PROVINCES__REQUEST:
      return {
        ...state,
        provincesFailed: false,
        provincesInProgress: true
      };
    case types.FETCH_PROVINCES__FAILURE:
      return {
        ...state,
        provincesFailed: true,
        provincesInProgress: false
      };
    case types.FETCH_PROVINCES__SUCCESS:
      return {
        ...state,
        provincesFailed: false,
        provincesInProgress: false,
        provinces: payload
      };
    case types.FETCH_LOCATIONS__REQUEST:
      return {
        ...state,
        locationsFailed: false,
        locationsInProgress: true
      };
    case types.FETCH_LOCATIONS__FAILURE:
      return {
        ...state,
        locationsFailed: true,
        locationsInProgress: false
      };
    case types.FETCH_LOCATIONS__SUCCESS:
      return {
        ...state,
        locationsFailed: false,
        locationsInProgress: false,
        locations: payload
      };
    default:
      return state;
  }
}
