import GraphQLClient from '@core/utils/GraphQLClient';

const NEW_PUBLICATION_MUTATION = `mutation createPublication(
    $additionalInformation: String,
    $locationId: String!,
    $petBreed: String!,
    $petColors: [String!]!,
    $petCollar: Boolean!,
    $petGender: String!,
    $petType: String!,
    $petSize: String!,
    $photosArray: [CreatePhotoInput!]!,
    $phoneNumber: String!,
    $provinceId: String!,
    $publicationReward: Boolean!,
    $publicationType: String!,
    $userId: String!
  ){
    createPublication(options: {
        creatorId: $userId,
        type: $publicationType,
        petData: {
            type: $petType,
            gender: $petGender,
            size: $petSize,
            color: $petColors,
            collar: $petCollar,
            breed: $petBreed,
            photosData: $photosArray
        },
        province: $provinceId,
        location: $locationId,
        phoneNumber: $phoneNumber,
        reward: $publicationReward,
        additionalInfo: $additionalInformation
    }) {
        id
        pet {
          photos {
            id
            data
            type
          }
        }
    }
}`;

const createPublication = async payload => {
  const response = await GraphQLClient.request(
    NEW_PUBLICATION_MUTATION,
    payload
  );
  return response.createPublication;
};

const GET_COMMON_VALUES_QUERY = `query getCommonValues($breed: String!){
  getCommonValues(breed: $breed){
    gender
    size
    color
  }
}`;

const getCommonValues = async payload => {
  const response = await GraphQLClient.request(
    GET_COMMON_VALUES_QUERY,
    payload
  );
  return response.getCommonValues;
};

export default {
  createPublication,
  getCommonValues
};
