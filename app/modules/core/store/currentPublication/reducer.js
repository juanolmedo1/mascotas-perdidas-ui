import { types } from '@core/store/currentPublication/actions';

const initialState = {
  deletedPublication: false,
  deleteRequestInProgress: false,
  deleteRequestFailed: false,
  requestInProgress: false,
  requestFailed: false,
  reportedPublication: false,
  reportRequestInProgress: false,
  reportRequestFailed: false,
  data: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.CLEAR_CURRENT_PUBLICATION:
      return {
        ...state,
        ...initialState
      };
    case types.DELETE_PUBLICATION_FAILURE:
      return {
        ...state,
        deleteRequestFailed: true,
        deleteRequestInProgress: false
      };
    case types.DELETE_PUBLICATION_REQUEST:
      return {
        ...state,
        deleteRequestFailed: false,
        deleteRequestInProgress: true
      };
    case types.DELETE_PUBLICATION_SUCCESS:
      return {
        ...state,
        deleteRequestFailed: false,
        deleteRequestInProgress: false,
        deletedPublication: true
      };
    case types.FETCH_PUBLICATION__FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };
    case types.FETCH_PUBLICATION__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };
    case types.FETCH_PUBLICATION__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        data: payload
      };
    case types.REPORT_PUBLICATION_FAILURE:
      return {
        ...state,
        reportRequestFailed: true,
        reportRequestInProgress: false
      };
    case types.REPORT_PUBLICATION_REQUEST:
      return {
        ...state,
        reportRequestFailed: false,
        reportRequestInProgress: true
      };
    case types.REPORT_PUBLICATION_SUCCESS:
      return {
        ...state,
        reportRequestFailed: false,
        reportRequestInProgress: false,
        reportedPublication: true
      };
    default:
      return state;
  }
}
