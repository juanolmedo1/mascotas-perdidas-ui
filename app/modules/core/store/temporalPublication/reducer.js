import { types } from '@core/store/temporalPublication/actions';

const initialState = {
  temporalPublicationInProgress: false,
  temporalPublicationFailed: false,
  data: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_TEMPORAL_PUBLICATION_FAILURE:
      return {
        ...state,
        temporalPublicationInProgress: false,
        temporalPublicationFailed: true,
        data: payload
      };
    case types.GET_TEMPORAL_PUBLICATION_REQUEST:
      return {
        ...state,
        temporalPublicationInProgress: true,
        temporalPublicationFailed: false
      };
    case types.GET_TEMPORAL_PUBLICATION_SUCCESS:
      return {
        ...state,
        temporalPublicationInProgress: false,
        temporalPublicationFailed: false,
        data: payload
      };
    default:
      return state;
  }
}
