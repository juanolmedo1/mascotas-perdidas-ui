import { types } from '@login/store/actions';

const initialState = {
  requestInProgress: false,
  requestFailed: false,
  profileInfo: {
    id: '12345',
    firstName: 'Juan',
    lastName: 'Olmedo',
    username: 'juan.olmedo',
    dateOfBirth: '15/05/1996',
    ubication: {
      province: {
        id: '06',
        name: 'Buenos Aires'
      },
      location: {
        id: '06056010001',
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
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_LOGIN__REQUEST:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: true
      };
    case types.FETCH_LOGIN__FAILURE:
      return {
        ...state,
        requestFailed: true,
        requestInProgress: false
      };
    case types.FETCH_LOGIN__SUCCESS:
      return {
        ...state,
        requestFailed: false,
        requestInProgress: false,
        profileInfo: payload
      };
    default:
      return state;
  }
}
