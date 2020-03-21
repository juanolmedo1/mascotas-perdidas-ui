import {
  fetchLocationsSaga,
  fetchProvincesSaga
} from '@core/store/ubication/sagas';
import { fetchPublicationSaga } from '@core/store/currentPublication/sagas';
import { fetchLoginSaga } from '@login/store/sagas';
import { fetchPublicationsSaga } from '@home/store/sagas';
import {
  onPublicationCreatedSaga,
  onSelectedImagesSaga
} from '@upload/store/sagas';

export default {
  fetchLocationsSaga,
  fetchLoginSaga,
  fetchProvincesSaga,
  fetchPublicationSaga,
  fetchPublicationsSaga,
  onPublicationCreatedSaga,
  onSelectedImagesSaga
};
