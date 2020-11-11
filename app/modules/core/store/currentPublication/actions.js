export const types = {
  CLEAR_CANDIDATES: 'CLEAR_CANDIDATES',
  CLEAR_CURRENT_PUBLICATION: 'CLEAR_CURRENT_PUBLICATION',
  DEACTIVATE_PUBLICATION_FAILURE: 'DEACTIVATE_PUBLICATION_FAILURE',
  DEACTIVATE_PUBLICATION_REQUEST: 'DEACTIVATE_PUBLICATION_REQUEST',
  DEACTIVATE_PUBLICATION_SUCCESS: 'DEACTIVATE_PUBLICATION_SUCCESS',
  DELETE_PUBLICATION_FAILURE: 'DELETE_PUBLICATION_FAILURE',
  DELETE_PUBLICATION_REQUEST: 'DELETE_PUBLICATION_REQUEST',
  DELETE_PUBLICATION_SUCCESS: 'DELETE_PUBLICATION_SUCCESS',
  FETCH_PUBLICATION__FAILURE: 'FETCH_PUBLICATION__FAILURE',
  FETCH_PUBLICATION__REQUEST: 'FETCH_PUBLICATION__REQUEST',
  FETCH_PUBLICATION__SUCCESS: 'FETCH_PUBLICATION__SUCCESS',
  GET_HEATMAP_PUBLICATIONS_FAILURE: 'GET_HEATMAP_PUBLICATIONS_FAILURE',
  GET_HEATMAP_PUBLICATIONS_REQUEST: 'GET_HEATMAP_PUBLICATIONS_REQUEST',
  GET_HEATMAP_PUBLICATIONS_SUCCESS: 'GET_HEATMAP_PUBLICATIONS_SUCCESS',
  GET_RESOLVED_CANDIDATES_FAILURE: 'GET_RESOLVED_CANDIDATES_FAILURE',
  GET_RESOLVED_CANDIDATES_REQUEST: 'GET_RESOLVED_CANDIDATES_REQUEST',
  GET_RESOLVED_CANDIDATES_SUCCESS: 'GET_RESOLVED_CANDIDATES_SUCCESS',
  GET_SIMILAR_PUBLICATIONS_FAILURE: 'GET_SIMILAR_PUBLICATIONS_FAILURE',
  GET_SIMILAR_PUBLICATIONS_REQUEST: 'GET_SIMILAR_PUBLICATIONS_REQUEST',
  GET_SIMILAR_PUBLICATIONS_SUCCESS: 'GET_SIMILAR_PUBLICATIONS_SUCCESS',
  REPORT_PUBLICATION_FAILURE: 'REPORT_PUBLICATION_FAILURE',
  REPORT_PUBLICATION_REQUEST: 'REPORT_PUBLICATION_REQUEST',
  REPORT_PUBLICATION_SUCCESS: 'REPORT_PUBLICATION_SUCCESS',
  UPDATE_PUBLICATION_FAILURE: 'UPDATE_PUBLICATION_FAILURE',
  UPDATE_PUBLICATION_REQUEST: 'UPDATE_PUBLICATION_REQUEST',
  UPDATE_PUBLICATION_SUCCESS: 'UPDATE_PUBLICATION_SUCCESS'
};

export const clearCandidates = () => ({
  type: types.CLEAR_CANDIDATES
});

export const clearCurrentPublication = () => ({
  type: types.CLEAR_CURRENT_PUBLICATION
});

export const deactivatePublication = ({
  notifyPublicationId,
  publicationId
}) => ({
  payload: { notifyPublicationId, publicationId },
  type: types.DEACTIVATE_PUBLICATION_REQUEST
});

export const deactivatePublicationFailure = error => ({
  payload: error,
  type: types.DEACTIVATE_PUBLICATION_FAILURE
});

export const deactivatePublicationSuccess = () => ({
  type: types.DEACTIVATE_PUBLICATION_SUCCESS
});

export const deletePublication = id => ({
  payload: { id },
  type: types.DELETE_PUBLICATION_REQUEST
});

export const deletePublicationFailure = error => ({
  payload: error,
  type: types.DELETE_PUBLICATION_FAILURE
});

export const deletePublicationSuccess = () => ({
  type: types.DELETE_PUBLICATION_SUCCESS
});

export const fetchPublication = id => ({
  payload: { id },
  type: types.FETCH_PUBLICATION__REQUEST
});

export const fetchPublicationFailure = error => ({
  payload: error,
  type: types.FETCH_PUBLICATION__FAILURE
});

export const fetchPublicationSuccess = publication => ({
  payload: publication,
  type: types.FETCH_PUBLICATION__SUCCESS
});

export const getHeatmapPublicationsFailure = error => ({
  payload: error,
  type: types.GET_HEATMAP_PUBLICATIONS_FAILURE
});

export const getHeatmapPublications = ({ publicationId, offset }) => ({
  payload: { publicationId, offset },
  type: types.GET_HEATMAP_PUBLICATIONS_REQUEST
});

export const getHeatmapPublicationsSuccess = heatmapPublications => ({
  payload: { heatmapPublications },
  type: types.GET_HEATMAP_PUBLICATIONS_SUCCESS
});

export const getResolvedCandidatesFailure = error => ({
  payload: error,
  type: types.GET_RESOLVED_CANDIDATES_FAILURE
});

export const getResolvedCandidates = id => ({
  payload: { id },
  type: types.GET_RESOLVED_CANDIDATES_REQUEST
});

export const getResolvedCandidatesSuccess = candidates => ({
  payload: { candidates },
  type: types.GET_RESOLVED_CANDIDATES_SUCCESS
});

export const getSimilarPublicationsFailure = error => ({
  payload: error,
  type: types.GET_SIMILAR_PUBLICATIONS_FAILURE
});

export const getSimilarPublications = id => ({
  payload: { id },
  type: types.GET_SIMILAR_PUBLICATIONS_REQUEST
});

export const getSimilarPublicationsSuccess = similarPublications => ({
  payload: { similarPublications },
  type: types.GET_SIMILAR_PUBLICATIONS_SUCCESS
});

export const reportPublication = data => ({
  payload: data,
  type: types.REPORT_PUBLICATION_REQUEST
});

export const reportPublicationFailure = error => ({
  payload: error,
  type: types.REPORT_PUBLICATION_FAILURE
});

export const reportPublicationSuccess = () => ({
  type: types.REPORT_PUBLICATION_SUCCESS
});

export const updatePublication = ({
  id,
  lastLatitude,
  lastLongitude,
  isActive
}) => ({
  payload: { id, lastLatitude, lastLongitude, isActive },
  type: types.UPDATE_PUBLICATION_REQUEST
});

export const updatePublicationFailure = error => ({
  payload: error,
  type: types.UPDATE_PUBLICATION_FAILURE
});

export const updatePublicationSuccess = () => ({
  type: types.UPDATE_PUBLICATION_SUCCESS
});
