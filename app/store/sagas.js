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
  onPublicationCreatedSaga,
  onSelectedImagesSaga
} from '@upload/store/sagas';

export default {
  deletePublicationSaga,
  fetchLocationsSaga,
  fetchLoginSaga,
  fetchProvincesSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  fetchUserPublicationsSaga,
  getSimilarPublicationsSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga,
  reportPublicationSaga
};
