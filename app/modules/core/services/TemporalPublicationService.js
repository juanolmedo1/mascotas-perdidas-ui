import GraphQLClient from '@core/utils/GraphQLClient';

const GET_TEMPORAL_PUBLICATION_QUERY = `query getTemporalPublication($id: String!){
  getTemporalPublication(id: $id){
    petPhoto
    createdAt
    petType
    ubication {
      firstLatitude
      firstLongitude
    }
    creator {
      username
      phoneNumber
      profilePicture {
        data
      }
    }
  }
}`;
const getTemporalPublication = async payload => {
  const response = await GraphQLClient.request(
    GET_TEMPORAL_PUBLICATION_QUERY,
    payload
  );
  return response.getTemporalPublication;
};

export default {
  getTemporalPublication
};
