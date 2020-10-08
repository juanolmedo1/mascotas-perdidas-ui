import {
  fetchLocationsSaga,
  fetchProvincesSaga
} from '@core/store/ubication/sagas';
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
  fetchLocationsSaga,
  fetchLoginSaga,
  fetchProvincesSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserPublicationsSaga,
  getSimilarPublicationsSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  reportPublicationSaga,
  registerUserSaga,
  fetchUserFavoritesSaga,
  onFavPublicationSaga,
  onUnfavPublicationSaga
};
