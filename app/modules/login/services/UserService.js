import GraphQLClient from '@core/utils/GraphQLClient';

const login = async ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'error') {
        reject(new Error('invalid username'));
      } else {
        resolve({ username, password });
      }
    }, 3000);
  });
};

const GET_USER_PUBLICATIONS_QUERY = `query getUserPublications($id: String!){
    getUserPublications(userId: $id){
      id
      pet {
        photos {
          id
          type
          data
        }
      }
    }
  }`;

const getUserPublications = async payload => {
  const response = await GraphQLClient.request(
    GET_USER_PUBLICATIONS_QUERY,
    payload
  );
  return response.getUserPublications;
};

export default {
  login,
  getUserPublications
};
