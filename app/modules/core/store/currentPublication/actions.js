export const types = {
  FETCH_PUBLICATION__FAILURE: 'FETCH_PUBLICATION__FAILURE',
  FETCH_PUBLICATION__REQUEST: 'FETCH_PUBLICATION__REQUEST',
  FETCH_PUBLICATION__SUCCESS: 'FETCH_PUBLICATION__SUCCESS',
  CLEAR_CURRENT_PUBLICATION: 'CLEAR_CURRENT_PUBLICATION'
};

export const fetchPublication = id => ({
  payload: { id },
  type: types.FETCH_PUBLICATION__REQUEST
});

export const clearCurrentPublication = () => ({
  type: types.CLEAR_CURRENT_PUBLICATION
});

export const fetchPublicationFailure = error => ({
  payload: error,
  type: types.FETCH_PUBLICATION__FAILURE
});

export const fetchPublicationSuccess = publication => ({
  payload: publication,
  type: types.FETCH_PUBLICATION__SUCCESS
});
