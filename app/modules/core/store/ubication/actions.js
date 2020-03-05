export const types = {
  FETCH_PROVINCES__FAILURE: 'FETCH_PROVINCES__FAILURE',
  FETCH_PROVINCES__REQUEST: 'FETCH_PROVINCES__REQUEST',
  FETCH_PROVINCES__SUCCESS: 'FETCH_PROVINCES__SUCCESS',
  FETCH_LOCATIONS__FAILURE: 'FETCH_LOCATIONS__FAILURE',
  FETCH_LOCATIONS__REQUEST: 'FETCH_LOCATIONS__REQUEST',
  FETCH_LOCATIONS__SUCCESS: 'FETCH_LOCATIONS__SUCCESS'
};

export const fetchProvinces = () => ({
  type: types.FETCH_PROVINCES__REQUEST
});

export const fetchProvincesFailure = error => ({
  payload: error,
  type: types.FETCH_PROVINCES__FAILURE
});

export const fetchProvincesSuccess = data => ({
  payload: data,
  type: types.FETCH_PROVINCES__SUCCESS
});

export const fetchLocations = province => ({
  payload: province,
  type: types.FETCH_LOCATIONS__REQUEST
});

export const fetchLocationsFailure = error => ({
  payload: error,
  type: types.FETCH_LOCATIONS__FAILURE
});

export const fetchLocationsSuccess = data => ({
  payload: data,
  type: types.FETCH_LOCATIONS__SUCCESS
});
