import {
  deletePublicationSaga,
  fetchPublicationSaga,
  getSimilarPublicationsSaga,
  reportPublicationSaga
} from '@core/store/currentPublication/sagas';
import { fetchLoginSaga, fetchUserPublicationsSaga } from '@login/store/sagas';
import { fetchPublicationsSaga } from '@home/store/sagas';
import {
  detectTypeAndBreedSaga,
  getCommonBreedAttributesSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga
} from '@upload/store/sagas';
import { registerUserSaga } from '@register/store/sagas';
import {
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
} from '@likes/store/sagas';

export default {
  deletePublicationSaga,
  detectTypeAndBreedSaga,
  fetchLoginSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserPublicationsSaga,
  getCommonBreedAttributesSaga,
  getSimilarPublicationsSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  reportPublicationSaga,
  registerUserSaga,
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
};
