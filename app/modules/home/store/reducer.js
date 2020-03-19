import { types } from '@home/store/actions';

const initialState = {
  requestInProgress: false,
  requestFailed: false,
  filters: {
    province: null,
    location: null,
    count: 0,
    publicationType: [],
    petType: [],
    petGender: [],
    petSize: []
  },
  data: []
};

const add = (array, value) => {
  return [...array, value];
};

const remove = (array, value) => {
  return array.filter(item => item !== value);
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

    case types.SET_PROVINCE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          province: payload
        }
      };

    case types.SET_LOCATION_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          location: payload
        }
      };

    case types.ADD_PUBLICATION_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count + 1,
          publicationType: add(state.filters.publicationType, payload)
        }
      };

    case types.REMOVE_PUBLICATION_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count - 1,
          publicationType: remove(state.filters.publicationType, payload)
        }
      };

    case types.ADD_PET_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count + 1,
          petType: add(state.filters.petType, payload)
        }
      };

    case types.REMOVE_PET_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count - 1,
          petType: remove(state.filters.petType, payload)
        }
      };

    case types.ADD_GENDER_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count + 1,
          petGender: add(state.filters.petGender, payload)
        }
      };

    case types.REMOVE_GENDER_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count - 1,
          petGender: remove(state.filters.petGender, payload)
        }
      };

    case types.ADD_SIZE_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count + 1,
          petSize: add(state.filters.petSize, payload)
        }
      };

    case types.REMOVE_SIZE_TYPE:
      return {
        ...state,
        filters: {
          ...state.filters,
          count: state.filters.count - 1,
          petSize: remove(state.filters.petSize, payload)
        }
      };

    case types.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...initialState.filters
        }
      };

    default:
      return state;
  }
}
