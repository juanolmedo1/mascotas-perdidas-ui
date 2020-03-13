import GraphQLClient from '@core/utils/GraphQLClient';

const NEW_PUBLICATION_MUTATION = `mutation createPublication($locationId: String!, $petGender: String!, $petType: String!, $photosArray: [String!]!, $provinceId: String!, $publicationType: String!, $userId: String! ){
    createPublication(options: {
        creatorId: $userId,
        type: $publicationType,
        petData: {
            type: $petType,
            gender: $petGender,
            size: "MEDIUM",
            color: ["#ffffff"],
            collar: false,
            photosData: $photosArray
        },
        province: $provinceId,
        location: $locationId,
        phoneNumber: "+542915079528",
        reward: false,
        additionalInfo: ""
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
