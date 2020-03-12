import {
  types,
  fetchLoginFailure,
  fetchLoginSuccess
} from '@login/store/actions';
import { put, takeLatest, call } from 'redux-saga/effects';
import NavigationService from '@core/utils/navigation';
import { login } from '@login/services/LoginService';

const mockedResponse = {
  id: '12345',
  firstName: 'Juan',
  lastName: 'Olmedo',
  username: 'juan.olmedo',
  dateOfBirth: '15/05/1996',
  ubication: {
    province: {
      id: '14',
      name: 'Buenos Aires'
    },
    location: {
      id: '14140010000',
      name: 'Bahia Blanca'
    }
  },
  email: 'juuan.olmedo@hotmail.com',
  phoneNumber: '+542915079528',
  picture:
    'https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-19/s320x320/56412495_2336547096630651_6295553287131234304_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_ohc=jJs8DCKfs-4AX8V4Qtb&oh=15fa0461fe42ff230772c6c7a34123dd&oe=5E8AAFE8',
  publications: [
    {
      id: '1',
      photos: ['https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg']
    },
    {
      id: '2',
      photos: ['https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg']
    },
    {
      id: '3',
      photos: ['https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg']
    },
    {
      id: '4',
      photos: ['https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg']
    }
  ]
};

export function* fetchLogin(action) {
  const { payload } = action;
  try {
    yield call(login, payload);
    yield put(fetchLoginSuccess(mockedResponse));
    NavigationService.navigate('BottomNavigator');
  } catch (error) {
    yield put(fetchLoginFailure(error));
  }
}

export function* fetchLoginSaga() {
  yield takeLatest(types.FETCH_LOGIN__REQUEST, fetchLogin);
}
