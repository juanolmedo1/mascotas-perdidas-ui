import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getAllSwatches } from 'react-native-palette';

import * as actionTypes from '@upload/store/actionTypes';
import {
  createPublicationFail,
  createPublicationSuccess,
  getCommonBreedAttributesValuesFailure,
  getCommonBreedAttributesValuesSuccess,
  getTypeAndBreedFailure,
  getTypeAndBreedSuccess,
  setExtractedColors,
  setExtractingColors,
  createTemporalPublicationFailure,
  createTemporalPublicationSuccess
} from '@upload/store/actions';
import NewPublicationService from '@upload/services/NewPublicationService';
import PhotoDetectionService from '@upload/services/PhotoDetectionService';
import NavigationService from '@core/utils/navigation';
import { getLoggedUserId } from '@login/store/selectors';
import {
  getLatitude,
  getLongitude
} from '@app/modules/core/store/ubication/selectors';

export function* onPublicationCreated(action) {
  const { newPublication } = action.payload;
  const photosArrayWithOnlyBase64 = newPublication.photosArray.map(
    photoObject => ({ data: photoObject.data, type: photoObject.mime })
  );

  const newPublicationValues = {
    ...newPublication,
    photosArray: photosArrayWithOnlyBase64
  };
  try {
    const similarPublications = yield call(
      NewPublicationService.createPublication,
      newPublicationValues
    );
    yield put(createPublicationSuccess(similarPublications));
  } catch (error) {
    yield put(createPublicationFail(error));
  } finally {
    yield NavigationService.navigate('Response');
  }
}

export function* onPublicationCreatedSaga() {
  yield takeLatest(
    actionTypes.CREATE_PUBLICATION_REQUEST,
    onPublicationCreated
  );
}

const getSwatches = image => {
  const imagePathWithoutFileText = getImagePath(image);
  return new Promise(resolve => {
    getAllSwatches({}, imagePathWithoutFileText, (error, swatches) => {
      const imageSwatches = error ? [] : swatches;
      resolve(imageSwatches);
    });
  });
};

const getColorsFromImages = extractedSwatches => {
  const bestExtractedSwatches = getMostPopularColors(extractedSwatches);
  const bestColors = getHexaCodes(bestExtractedSwatches);
  return bestColors;
};

const getMostPopularColors = imageColors => {
  const MAX_IMAGE_COLORS = 15;
  imageColors.sort((a, b) => {
    return b.population - a.population;
  });
  return imageColors.splice(0, MAX_IMAGE_COLORS);
};

const getHexaCodes = bestColors => {
  return bestColors.map(bestColor => {
    const { swatchInfo } = bestColor;
    const hexaCode = `#${
      swatchInfo
        .split('[RGB: ')[1]
        .split(']')[0]
        .split('#ff')[1]
    }`;
    return hexaCode;
  });
};

const getImagePath = image => image.path.split('file:///')[1];

export function* onSelectedImages(action) {
  const { selectedImages } = action.payload;
  yield put(setExtractingColors(true));
  const extractedSwatches1 = yield call(getSwatches, selectedImages[0]);
  const extractedSwatches2 = selectedImages[1]
    ? yield call(getSwatches, selectedImages[1])
    : [];
  const extractedSwatches3 = selectedImages[2]
    ? yield call(getSwatches, selectedImages[2])
    : [];
  const extractedSwatches = [
    ...extractedSwatches1,
    ...extractedSwatches2,
    ...extractedSwatches3
  ];
  const extractedColors = getColorsFromImages(extractedSwatches);
  yield put(setExtractedColors(extractedColors));
  yield put(setExtractingColors(false));
}

export function* onSelectedImagesSaga() {
  yield takeLatest(actionTypes.GET_EXTRACTED_COLORS, onSelectedImages);
}

export function* detectTypeAndBreed(action) {
  const { payload } = action;
  try {
    const petPrediction = yield call(
      PhotoDetectionService.getTypeAndBreed,
      payload
    );
    yield put(getTypeAndBreedSuccess(petPrediction));
  } catch (error) {
    yield put(getTypeAndBreedFailure(error));
  }
}

export function* detectTypeAndBreedSaga() {
  yield takeLatest(actionTypes.GET_TYPE_AND_BREED_REQUEST, detectTypeAndBreed);
}

export function* getCommonBreedAttributes(action) {
  const { payload } = action;
  try {
    const breedCommonValues = yield call(
      NewPublicationService.getCommonValues,
      payload
    );
    yield put(getCommonBreedAttributesValuesSuccess(breedCommonValues));
  } catch (error) {
    yield put(getCommonBreedAttributesValuesFailure(error));
  }
}

export function* getCommonBreedAttributesSaga() {
  yield takeLatest(
    actionTypes.GET_COMMON_BREED_ATTRIBUTES_REQUEST,
    getCommonBreedAttributes
  );
}

export function* createTemporalPublication(action) {
  const { payload } = action;
  try {
    const creatorId = yield select(getLoggedUserId);
    const latitude = yield select(getLatitude);
    const longitude = yield select(getLongitude);
    const temporalPublicationInput = {
      creatorId,
      photoData: payload.image.data,
      photoType: payload.image.type,
      latitude,
      longitude
    };
    const temporalPublication = yield call(
      NewPublicationService.createTemporalPublication,
      temporalPublicationInput
    );

    yield put(createTemporalPublicationSuccess(temporalPublication));
    NavigationService.navigate('TemporalResponse');
  } catch (error) {
    console.log(error);
    yield put(createTemporalPublicationFailure(error));
    NavigationService.navigate('TemporalResponse');
  }
}

export function* createTemporalPublicationSaga() {
  yield takeLatest(
    actionTypes.CREATE_TEMPORAL_PUBLICATION_REQUEST,
    createTemporalPublication
  );
}
