import * as actionTypes from './actionTypes';

function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export const clearStore = () => createAction(actionTypes.CLEAR_STORE);

export const createPublicationRequest = newPublication =>
  createAction(actionTypes.CREATE_PUBLICATION_REQUEST, { newPublication });

export const createPublicationFail = error =>
  createAction(actionTypes.CREATE_PUBLICATION_FAILURE, { error });

export const createPublicationSuccess = similarPublications =>
  createAction(actionTypes.CREATE_PUBLICATION_SUCCESS, { similarPublications });

export const setAdditionalInformation = additionalInformation =>
  createAction(actionTypes.SET_ADDITIONAL_INFORMATION, {
    additionalInformation
  });

export const setHasChanges = () => createAction(actionTypes.SET_HAS_CHANGES);

export const setLocationId = locationId =>
  createAction(actionTypes.SET_LOCATION_ID, { locationId });

export const setPetCollar = hasCollar =>
  createAction(actionTypes.SET_PET_COLLAR, { hasCollar });

export const setPetGender = petGender =>
  createAction(actionTypes.SET_PET_GENDER, { petGender });

export const setPetType = petType =>
  createAction(actionTypes.SET_PET_TYPE, { petType });

export const setPetSize = petSize =>
  createAction(actionTypes.SET_PET_SIZE, { petSize });

export const setPhotosArray = photosArray =>
  createAction(actionTypes.SET_PHOTOS_ARRAY, { photosArray });

export const setPhoneNumber = phoneNumber => {
  return createAction(actionTypes.SET_PHONE_NUMBER, { phoneNumber });
};

export const setProvinceId = provinceId =>
  createAction(actionTypes.SET_PROVINCE_ID, { provinceId });

export const setPublicationType = publicationType =>
  createAction(actionTypes.SET_PUBLICATION_TYPE, { publicationType });

export const setPublicationReward = hasReward =>
  createAction(actionTypes.SET_PUBLICATION_REWARD, { hasReward });

export const setUserId = userId =>
  createAction(actionTypes.SET_USER_ID, { userId });
