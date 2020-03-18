import GraphQLClient from '@core/utils/GraphQLClient';

const NEW_PUBLICATION_MUTATION = `mutation createPublication(
    $additionalInformation: String,
    $locationId: String!,
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
            color: ["#ffffff"],
            collar: $petCollar,
            photosData: $photosArray
        },
        province: $provinceId,
        location: $locationId,
        phoneNumber: $phoneNumber,
        reward: $publicationReward,
        additionalInfo: $additionalInformation
    }) {
        id
    }
}`;

const createPublication = async payload => {
  const response = await GraphQLClient.request(
    NEW_PUBLICATION_MUTATION,
    payload
  );
  return response.createPublication;
};

export default {
  createPublication
};
