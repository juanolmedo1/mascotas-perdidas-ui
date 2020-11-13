export const types = {
  GET_TEMPORAL_PUBLICATION_FAILURE: 'GET_TEMPORAL_PUBLICATION_FAILURE',
  GET_TEMPORAL_PUBLICATION_REQUEST: 'GET_TEMPORAL_PUBLICATION_REQUEST',
  GET_TEMPORAL_PUBLICATION_SUCCESS: 'GET_TEMPORAL_PUBLICATION_SUCCESS'
};

export const getTemporalPublication = id => ({
  payload: { id },
  type: types.GET_TEMPORAL_PUBLICATION_REQUEST
});

export const getTemporalPublicationFailure = error => ({
  payload: error,
  type: types.GET_TEMPORAL_PUBLICATION_FAILURE
});

export const getTemporalPublicationSuccess = data => ({
  payload: data,
  type: types.GET_TEMPORAL_PUBLICATION_SUCCESS
});
