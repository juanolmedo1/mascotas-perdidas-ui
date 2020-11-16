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

export const getCommonBreedAttributesValuesFailure = error =>
  createAction(actionTypes.GET_COMMON_BREED_ATTRIBUTES_FAILURE, { error });

export const getCommonBreedAttributesValuesRequest = breed =>
  createAction(actionTypes.GET_COMMON_BREED_ATTRIBUTES_REQUEST, { breed });

export const getCommonBreedAttributesValuesSuccess = commonAttributesValues =>
  createAction(
    actionTypes.GET_COMMON_BREED_ATTRIBUTES_SUCCESS,
    commonAttributesValues
  );

export const getExtractedColors = selectedImages =>
  createAction(actionTypes.GET_EXTRACTED_COLORS, { selectedImages });

export const getTypeAndBreedFailure = error =>
  createAction(actionTypes.GET_TYPE_AND_BREED_FAILURE, { error });

export const getTypeAndBreedRequest = image =>
  createAction(actionTypes.GET_TYPE_AND_BREED_REQUEST, { image });

export const getTypeAndBreedSuccess = imagePrediction =>
  createAction(actionTypes.GET_TYPE_AND_BREED_SUCCESS, imagePrediction);

export const setAdditionalInformation = additionalInformation =>
  createAction(actionTypes.SET_ADDITIONAL_INFORMATION, {
    additionalInformation
  });

export const setExtractedColors = newExtractedColors =>
  createAction(actionTypes.SET_EXTRACTED_COLORS, {
    newExtractedColors
  });

export const setExtractingColors = extractingColors =>
  createAction(actionTypes.SET_EXTRACTING_COLORS, { extractingColors });

export const setHasChanges = () => createAction(actionTypes.SET_HAS_CHANGES);

export const setPetBreed = petBreed =>
  createAction(actionTypes.SET_PET_BREED, { petBreed });

export const setPetCollar = hasCollar =>
  createAction(actionTypes.SET_PET_COLLAR, { hasCollar });

export const setPetColor = petColor =>
  createAction(actionTypes.SET_PET_COLOR, { petColor });

export const setPetGender = petGender =>
  createAction(actionTypes.SET_PET_GENDER, { petGender });

export const setPetType = petType =>
  createAction(actionTypes.SET_PET_TYPE, { petType });

export const setPetSize = petSize =>
  createAction(actionTypes.SET_PET_SIZE, { petSize });

export const setPhotosArray = photosArray =>
  createAction(actionTypes.SET_PHOTOS_ARRAY, { photosArray });

export const setPhoneNumber = phoneNumber =>
  createAction(actionTypes.SET_PHONE_NUMBER, { phoneNumber });

export const setPublicationType = publicationType =>
  createAction(actionTypes.SET_PUBLICATION_TYPE, { publicationType });

export const setPublicationReward = hasReward =>
  createAction(actionTypes.SET_PUBLICATION_REWARD, { hasReward });

export const setUserId = userId =>
  createAction(actionTypes.SET_USER_ID, { userId });

export const setPublicationUbication = ubication =>
  createAction(actionTypes.SET_PUBLICATION_UBICATION, ubication);

export const createTemporalPublicationFailure = error =>
  createAction(actionTypes.CREATE_TEMPORAL_PUBLICATION_FAILURE, { error });

export const createTemporalPublicationRequest = image =>
  createAction(actionTypes.CREATE_TEMPORAL_PUBLICATION_REQUEST, { image });

export const createTemporalPublicationSuccess = temporalPublication =>
  createAction(
    actionTypes.CREATE_TEMPORAL_PUBLICATION_SUCCESS,
    temporalPublication
  );
