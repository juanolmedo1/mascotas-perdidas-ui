import GraphQLClient from '@core/utils/GraphQLClient';

const GET_PUBLICATIONS_QUERY = `query getPublications($province: String!, $location: String!) {
  getPublications(options: { province: $province, location: $location}) {
    id
    type
    pet {
      photos {
        id
        data
        type
      }
    }
    createdAt
  }
}`;

const GET_PUBLICATION_QUERY = `query getPublication($id: String!) {
  getPublication(id: $id) {
    id
    type
    phoneNumber
    reward
    additionalInfo
    complaints
    createdAt
    creator {
      id
      username
      profilePicture {
        id
        type
        data
      }
    }
    pet {
      type
      size
      color
      gender
      collar
      photos {
        id
        data
        type
      }
    }
    createdAt
  }
}`;

const getPublication = async payload => {
  const response = await GraphQLClient.request(GET_PUBLICATION_QUERY, payload);
  return response.getPublication;
};

const getPublications = async payload => {
  const response = await GraphQLClient.request(GET_PUBLICATIONS_QUERY, payload);
  return response.getPublications;
};

export default {
  getPublications,
  getPublication
};
