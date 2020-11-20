import createGraphQLClient from '@core/utils/GraphQLClient';

const GET_TYPE_AND_BREED_QUERY = `query getTypeAndBreed($image: String!){
    getTypeAndBreed(image: $image) {
        type
        breed {
          label
          labelSpanish
          prob
          photo
        }
    }
}`;

const getTypeAndBreed = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    GET_TYPE_AND_BREED_QUERY,
    payload
  );
  return response.getTypeAndBreed;
};

export default {
  getTypeAndBreed
};
