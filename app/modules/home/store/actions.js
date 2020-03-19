export const types = {
  FETCH_PUBLICATIONS__FAILURE: 'FETCH_PUBLICATIONS__FAILURE',
  FETCH_PUBLICATIONS__REQUEST: 'FETCH_PUBLICATIONS__REQUEST',
  FETCH_PUBLICATIONS__SUCCESS: 'FETCH_PUBLICATIONS__SUCCESS',
  ADD_PUBLICATION_TYPE: 'ADD_PUBLICATION_TYPE',
  REMOVE_PUBLICATION_TYPE: 'REMOVE_PUBLICATION_TYPE',
  ADD_PET_TYPE: 'ADD_PET_TYPE',
  REMOVE_PET_TYPE: 'REMOVE_PET_TYPE',
  ADD_GENDER_TYPE: 'ADD_GENDER_TYPE',
  REMOVE_GENDER_TYPE: 'REMOVE_GENDER_TYPE',
  ADD_SIZE_TYPE: 'ADD_SIZE_TYPE',
  REMOVE_SIZE_TYPE: 'REMOVE_SIZE_TYPE',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  SET_LOCATION_FILTER: 'SET_LOCATION_FILTER',
  SET_PROVINCE_FILTER: 'SET_PROVINCE_FILTER'
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

export const clearFilters = () => ({
  type: types.CLEAR_FILTERS
});

export const setLocationFilter = payload => ({
  payload,
  type: types.SET_LOCATION_FILTER
});

export const setProvinceFilter = payload => ({
  payload,
  type: types.SET_PROVINCE_FILTER
});

export const addPublicationType = payload => ({
  payload,
  type: types.ADD_PUBLICATION_TYPE
});

export const removePublicationType = payload => ({
  payload,
  type: types.REMOVE_PUBLICATION_TYPE
});

export const addPetType = payload => ({
  payload,
  type: types.ADD_PET_TYPE
});

export const removePetType = payload => ({
  payload,
  type: types.REMOVE_PET_TYPE
});

export const addGenderType = payload => ({
  payload,
  type: types.ADD_GENDER_TYPE
});

export const removeGenderType = payload => ({
  payload,
  type: types.REMOVE_GENDER_TYPE
});

export const addSizeType = payload => ({
  payload,
  type: types.ADD_SIZE_TYPE
});

export const removeSizeType = payload => ({
  payload,
  type: types.REMOVE_SIZE_TYPE
});
