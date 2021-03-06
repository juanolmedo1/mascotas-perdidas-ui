import { types } from '@core/store/currentPublication/actions';

const initialState = {
  deletedPublication: false,
  deleteRequestInProgress: false,
  deleteRequestFailed: false,
  heatmapPublications: null,
  heatmapPublicationsRequestInProgress: false,
  heatmapPublicationsRequestFailed: false,
  requestInProgress: false,
  requestFailed: false,
  reportedPublication: false,
  reportRequestInProgress: false,
  reportRequestFailed: false,
  resolvedCandidates: null,
  resolvedCandidatesRequestInProgress: false,
  resolvedCandidatesRequestFailed: false,
  similarPublications: null,
  similarPublicationsRequestInProgress: false,
  similarPublicationsRequestFailed: false,
  updatedPublication: false,
  updatePublicationInProgress: false,
  updatePublicationFailed: false,
  data: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.CLEAR_CANDIDATES:
      return {
        ...state,
        resolvedCandidates: null,
        resolvedCandidatesRequestInProgress: false,
        resolvedCandidatesRequestFailed: false
      };
    case types.CLEAR_CURRENT_PUBLICATION: {
      const {
        resolvedCandidates,
        resolvedCandidatesRequestInProgress,
        resolvedCandidatesRequestFailed,
        similarPublications,
        similarPublicationsRequestInProgress,
        similarPublicationsRequestFailed,
        ...initialStateRest
      } = initialState;
      return {
        ...state,
        ...initialStateRest
      };
    }
    case types.DELETE_PUBLICATION_FAILURE:
      return {
        ...state,
        deleteRequestFailed: true,
        deleteRequestInProgress: false,
        deletedPublication: true
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
    case types.GET_HEATMAP_PUBLICATIONS_FAILURE:
      return {
        ...state,
        heatmapPublicationsRequestInProgress: false,
        heatmapPublicationsRequestFailed: true,
        heatmapPublications: null
      };
    case types.GET_HEATMAP_PUBLICATIONS_REQUEST:
      return {
        ...state,
        heatmapPublicationsRequestInProgress: true,
        heatmapPublicationsRequestFailed: false
      };
    case types.GET_HEATMAP_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        heatmapPublicationsRequestInProgress: false,
        heatmapPublicationsRequestFailed: false,
        heatmapPublications: payload.heatmapPublications
      };
    case types.GET_RESOLVED_CANDIDATES_FAILURE:
      return {
        ...state,
        resolvedCandidatesRequestInProgress: false,
        resolvedCandidatesRequestFailed: true,
        resolvedCandidates: null
      };
    case types.GET_RESOLVED_CANDIDATES_REQUEST:
      return {
        ...state,
        resolvedCandidates: null,
        resolvedCandidatesRequestInProgress: true,
        resolvedCandidatesRequestFailed: false
      };
    case types.GET_RESOLVED_CANDIDATES_SUCCESS:
      return {
        ...state,
        resolvedCandidatesRequestInProgress: false,
        resolvedCandidatesRequestFailed: false,
        resolvedCandidates: payload.candidates
      };
    case types.GET_SIMILAR_PUBLICATIONS_FAILURE:
      return {
        ...state,
        similarPublicationsRequestInProgress: false,
        similarPublicationsRequestFailed: true,
        similarPublications: null
      };
    case types.GET_SIMILAR_PUBLICATIONS_REQUEST:
      return {
        ...state,
        similarPublications: null,
        similarPublicationsRequestInProgress: true,
        similarPublicationsRequestFailed: false
      };
    case types.GET_SIMILAR_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        similarPublicationsRequestInProgress: false,
        similarPublicationsRequestFailed: false,
        similarPublications: payload.similarPublications
      };
    case types.CLEAR_SIMILAR_PUBLICATIONS:
      return {
        ...state,
        similarPublicationsRequestInProgress: false,
        similarPublicationsRequestFailed: false,
        similarPublications: null
      };
    case types.REPORT_PUBLICATION_FAILURE:
      return {
        ...state,
        reportRequestFailed: true,
        reportRequestInProgress: false,
        reportedPublication: false
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
    case types.DEACTIVATE_PUBLICATION_FAILURE:
    case types.UPDATE_PUBLICATION_FAILURE:
      return {
        ...state,
        updatePublicationFailed: true,
        updatePublicationInProgress: false,
        updatedPublication: false
      };
    case types.UPDATE_PUBLICATION_REQUEST:
    case types.DEACTIVATE_PUBLICATION_REQUEST:
      return {
        ...state,
        updatePublicationFailed: false,
        updatePublicationInProgress: true,
        updatedPublication: false
      };
    case types.DEACTIVATE_PUBLICATION_SUCCESS:
    case types.UPDATE_PUBLICATION_SUCCESS:
      return {
        ...state,
        updatePublicationFailed: false,
        updatePublicationInProgress: false,
        updatedPublication: true
      };
    default:
      return state;
  }
}
