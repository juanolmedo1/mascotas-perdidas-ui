import * as actionTypes from './actionTypes';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';

const initialState = {
  additionalInformation: '',
  extractedColors: [],
  extractingColors: false,
  hasChanges: false,
  petColors: [],
  petCollar: false,
  petGender: PET_ENTITY.genders.male,
  petSize: PET_ENTITY.sizes.medium,
  petType: PET_ENTITY.types.dog,
  phoneNumber: null,
  photosArray: [],
  publicationReward: false,
  publicationType: PUBLICATION_ENTITY.types.lost,
  requestFailed: false,
  requestInProgress: false,
  similarPublications: [],
  userId: null
};

const MAX_SELECTED_COLORS = 3;
const handleSelectedColors = (state, { petColor }) => {
  if (!petColor) {
    return {
      ...state,
      petColors: []
    };
  }
  let newSelectedColors = [...state.petColors];
  const isSelected = newSelectedColors.includes(petColor);
  if (isSelected) {
    newSelectedColors = newSelectedColors.filter(
      selectedColor => selectedColor !== petColor
    );
  } else {
    const canSelectNewColor = newSelectedColors.length < MAX_SELECTED_COLORS;
    if (!canSelectNewColor) {
      newSelectedColors.splice(0, 1);
    }
    newSelectedColors.push(petColor);
  }
  return {
    ...state,
    petColors: newSelectedColors
  };
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.CLEAR_STORE:
      return {
        ...state,
        ...initialState
      };
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
    case actionTypes.SET_EXTRACTED_COLORS:
      return {
        ...state,
        extractedColors: payload.newExtractedColors
      };
    case actionTypes.SET_EXTRACTING_COLORS:
      return {
        ...state,
        extractingColors: payload.extractingColors
      };
    case actionTypes.SET_HAS_CHANGES:
      return {
        ...state,
        hasChanges: true
      };
    case actionTypes.SET_PET_COLLAR:
      return {
        ...state,
        petCollar: payload.hasCollar
      };
    case actionTypes.SET_PET_COLOR:
      return handleSelectedColors(state, payload);
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
