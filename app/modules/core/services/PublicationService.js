import GraphQLClient from '@core/utils/GraphQLClient';

const GET_PUBLICATIONS_QUERY = `query getFilteredPublications(
    $province: String!, 
    $location: String!, 
    $publicationType: [String!]!, 
    $petType: [String!]!, 
    $petGender: [String!]!, 
    $petSize: [String!]!
  ){
    getFilteredPublications(options: { 
      province: $province
      location: $location
      type: $publicationType
      petFilters: {
        type: $petType,
        gender: $petGender,
        size: $petSize
      }
    }){
      id
      type
      createdAt
      pet {
        photos {
          id
          data
          type
        }
      }
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
  return response.getFilteredPublications;
};

export default {
  getPublications,
  getPublication
};