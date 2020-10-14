import * as actionTypes from './actionTypes';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';

const normalColors = [...Object.values(PET_ENTITY.colors.normal)];
const otherColors = [...Object.values(PET_ENTITY.colors.others)];

const initialState = {
  additionalInformation: '',
  extractedColors: [],
  extractingColors: false,
  hasChanges: false,
  petBreed: null,
  petColors: [],
  petCollar: false,
  petGender: PET_ENTITY.genders.male,
  petPrediction: null,
  petSize: PET_ENTITY.sizes.medium,
  petType: PET_ENTITY.types.dog,
  phoneNumber: null,
  photosArray: [],
  publicationReward: false,
  publicationType: PUBLICATION_ENTITY.types.lost,
  requestFailed: false,
  requestInProgress: false,
  requestCommonBreedValuesInProgress: false,
  requestCommonBreedValuesFail: false,
  requestPetPredictionInProgress: false,
  requestPetPredictionFail: false,
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

const handleCommonBreedAttributes = (state, payload) => {
  const { color: commonColors, gender, size } = payload;
  const commonToExtractedColors = [];
  commonColors.forEach(commonColor => {
    const isNormalsColor = normalColors.find(
      normalColor => normalColor === commonColor
    );
    const isOthersColor = otherColors.find(
      otherColor => otherColor === commonColor
    );
    if (!isNormalsColor && !isOthersColor) {
      commonToExtractedColors.push(commonColor);
    }
  });
  return {
    ...state,
    requestCommonBreedValuesFail: false,
    requestCommonBreedValuesInProgress: false,
    extractedColors: [...state.extractedColors, ...commonToExtractedColors],
    petGender: gender,
    petColors: commonColors,
    petSize: size
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
    case actionTypes.GET_COMMON_BREED_ATTRIBUTES_FAILURE:
      return {
        ...state,
        requestCommonBreedValuesFail: true,
        requestCommonBreedValuesInProgress: false
      };
    case actionTypes.GET_COMMON_BREED_ATTRIBUTES_REQUEST:
      return {
        ...state,
        requestCommonBreedValuesFail: false,
        requestCommonBreedValuesInProgress: true
      };
    case actionTypes.GET_COMMON_BREED_ATTRIBUTES_SUCCESS:
      return handleCommonBreedAttributes(state, payload);
    case actionTypes.GET_TYPE_AND_BREED_FAILURE:
      return {
        ...state,
        requestPetPredictionFail: true,
        requestPetPredictionInProgress: false,
        petPrediction: null
      };
    case actionTypes.GET_TYPE_AND_BREED_REQUEST:
      return {
        ...state,
        requestPetPredictionFail: false,
        requestPetPredictionInProgress: true,
        petPrediction: null
      };
    case actionTypes.GET_TYPE_AND_BREED_SUCCESS:
      return {
        ...state,
        requestPetPredictionFail: false,
        requestPetPredictionInProgress: false,
        petPrediction: payload
      };
    case actionTypes.SET_ADDITIONAL_INFORMATION:
      return {
        ...state,
        additionalInformation: payload.additionalInformation
      };
    case actionTypes.SET_EXTRACTED_COLORS:
      return {
        ...state,
        extractedColors: [
          ...state.extractedColors,
          ...payload.newExtractedColors
        ]
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
    case actionTypes.SET_PET_BREED:
      return {
        ...state,
        petBreed: payload.petBreed
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
