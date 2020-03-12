export const types = {
  FETCH_PUBLICATIONS__FAILURE: 'FETCH_PUBLICATIONS__FAILURE',
  FETCH_PUBLICATIONS__REQUEST: 'FETCH_PUBLICATIONS__REQUEST',
  FETCH_PUBLICATIONS__SUCCESS: 'FETCH_PUBLICATIONS__SUCCESS'
};

export const fetchPublications = () => ({
  type: types.FETCH_PUBLICATIONS__REQUEST
});

export const fetchPublicationsFailure = error => ({
  payload: error,
  type: types.FETCH_PUBLICATIONS__FAILURE
});

export const fetchPublicationsSuccess = publications => ({
  payload: publications,
  type: types.FETCH_PUBLICATIONS__SUCCESS
});
