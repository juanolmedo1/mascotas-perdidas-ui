import * as actionTypes from './actionTypes';

function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export const createPublicationRequest = newPublication =>
  createAction(actionTypes.CREATE_PUBLICATION_REQUEST, { newPublication });

export const createPublicationFail = error =>
  createAction(actionTypes.CREATE_PUBLICATION_FAILURE, { error });

export const createPublicationSuccess = similarPublications =>
  createAction(actionTypes.CREATE_PUBLICATION_SUCCESS, { similarPublications });

export const setLocationId = locationId =>
  createAction(actionTypes.SET_LOCATION_ID, { locationId });

export const setPetGender = petGender =>
  createAction(actionTypes.SET_PET_GENDER, { petGender });

export const setPetType = petType =>
  createAction(actionTypes.SET_PET_TYPE, { petType });

export const setPhotosArray = photosArray =>
  createAction(actionTypes.SET_PHOTOS_ARRAY, { photosArray });

export const setProvinceId = provinceId =>
  createAction(actionTypes.SET_PROVINCE_ID, { provinceId });

export const setPublicationType = publicationType =>
  createAction(actionTypes.SET_PUBLICATION_TYPE, { publicationType });

export const setUserId = userId =>
  createAction(actionTypes.SET_USER_ID, { userId });
