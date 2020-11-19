import createGraphQLClient from '@core/utils/GraphQLClient';

const NEW_PUBLICATION_MUTATION = `mutation createPublication(
    $additionalInformation: String,
    $latitude: Float!,
    $longitude: Float!,
    $petBreed: String!,
    $petColors: [String!]!,
    $petCollar: Boolean!,
    $petGender: String!,
    $petType: String!,
    $petSize: String!,
    $photosArray: [CreatePhotoInput!]!,
    $phoneNumber: String!,
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
        ubicationData: {
          latitude: $latitude,
          longitude: $longitude
        },
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
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    NEW_PUBLICATION_MUTATION,
    payload
  );
  return response.createPublication;
};

const CREATE_TEMPORAL_PUBLICATION = `mutation createTemporalPublication($creatorId: String!, $photoType: String!, $photoData: String!, $latitude: Float!, $longitude: Float!){
  createTemporalPublication(input: {
    creatorId: $creatorId
    photo: {
      type: $photoType
      data: $photoData
    }
    ubicationData: {
      latitude: $latitude
      longitude: $longitude
    }
  }){
    id
    petPhoto
    creator {
      phoneNumber
    }
    ubication {
      firstLatitude
      firstLongitude
    }
  }
}`;

const createTemporalPublication = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    CREATE_TEMPORAL_PUBLICATION,
    payload
  );
  return response.createTemporalPublication;
};

const GET_COMMON_VALUES_QUERY = `query getCommonValues($breed: String!){
  getCommonValues(breed: $breed){
    gender
    size
    color
  }
}`;

const getCommonValues = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    GET_COMMON_VALUES_QUERY,
    payload
  );
  return response.getCommonValues;
};

export default {
  createPublication,
  createTemporalPublication,
  getCommonValues
};
