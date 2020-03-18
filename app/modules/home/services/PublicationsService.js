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

const getPublications = async payload => {
  const response = await GraphQLClient.request(GET_PUBLICATIONS_QUERY, payload);
  return response.getPublications;
};

export default {
  getPublications
};
