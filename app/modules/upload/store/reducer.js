import * as actionTypes from './actionTypes';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';

const initialState = {
  additionalInformation: '',
  locationId: null,
  petCollar: false,
  petGender: PET_ENTITY.genders.male,
  petType: PET_ENTITY.types.dog,
  petSize: PET_ENTITY.sizes.medium,
  photosArray: ['foto1'],
  phoneNumber: null,
  provinceId: null,
  publicationType: PUBLICATION_ENTITY.types.lost,
  publicationReward: false,
  userId: null,
  requestFailed: false,
  requestInProgress: false,
  similarPublications: [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
  ]
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
    case actionTypes.SET_ADDITIONAL_INFORMATION:
      return {
        ...state,
        additionalInformation: payload.additionalInformation
      };
    case actionTypes.SET_LOCATION_ID:
      return {
        ...state,
        locationId: payload.locationId
      };
    case actionTypes.SET_PET_COLLAR:
      return {
        ...state,
        petCollar: payload.hasCollar
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
    case actionTypes.SET_PET_SIZE:
      return {
        ...state,
        petSize: payload.petSize
      };
    case actionTypes.SET_PHOTOS_ARRAY:
      return {
        ...state,
        photosArray: payload.photosArray
      };
    case actionTypes.SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: payload.phoneNumber
      };
    case actionTypes.SET_PROVINCE_ID:
      return {
        ...state,
        provinceId: payload.provinceId
      };
    case actionTypes.SET_PUBLICATION_REWARD:
      return {
        ...state,
        publicationReward: payload.hasReward
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
