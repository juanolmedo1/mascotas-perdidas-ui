import GraphQLClient from '@core/utils/GraphQLClient';

const GET_PUBLICATIONS_QUERY = `{
  getPublications {
    id
    type
    pet
    createdAt
    photos {
      id 
      data
    } 
  }
}`;

const getPublications = async payload => {
  const response = await GraphQLClient.request(GET_PUBLICATIONS_QUERY);
  return response.getPublications;
};

export default {
  getPublications
};
