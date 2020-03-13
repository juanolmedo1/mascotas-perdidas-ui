import * as actionTypes from './actionTypes';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';

const initialState = {
  locationId: null,
  petGender: PET_ENTITY.genders.male,
  petType: PET_ENTITY.types.dog,
  photosArray: ['foto1'],
  provinceId: null,
  publicationType: PUBLICATION_ENTITY.types.lost,
  userId: null,
  requestFailed: false,
  requestInProgress: false,
  similarPublications: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_PUBLICATION_REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };
    case actionTypes.CREATE_PUBLICATION_FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };
    case actionTypes.CREATE_PUBLICATION_SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        similarPublications: payload.similarPublications
      };
    case actionTypes.SET_LOCATION_ID:
      return {
        ...state,
        locationId: payload.locationId
      };
    case actionTypes.SET_PET_GENDER:
      return {
        ...state,
        petGender: payload.petGender
      };
    case actionTypes.SET_PET_TYPE:
      return {
        ...state,
        petType: payload.petType
      };
    case actionTypes.SET_PHOTOS_ARRAY:
      return {
        ...state,
        photosArray: payload.photosArray
      };
    case actionTypes.SET_PROVINCE_ID:
      return {
        ...state,
        provinceId: payload.provinceId
      };
    case actionTypes.SET_PUBLICATION_TYPE:
      return {
        ...state,
        publicationType: payload.publicationType
      };
    case actionTypes.SET_USER_ID:
      return {
        ...state,
        userId: payload.userId
      };
    default:
      return state;
  }
}
