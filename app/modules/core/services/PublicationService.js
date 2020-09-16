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
      creator {
        username
        profilePicture {
          type
          data
        }
      }
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

const REPORT_PUBLICATION_MUTATION = `mutation addComplaint($id: String!){
  addComplaint(id: $id) {
    id
  }
}`;

const DELETE_PUBLICATION_MUTATION = `mutation deletePublication($id: String!){
  deletePublication(id: $id) {
    id
  }
}`;

const GET_MATCHINGS_QUERY = `query getMatchingPublications($id: String!){
  getMatchingPublications(publicationId: $id){
    publicationsViewed {
      id
      type
      createdAt
      creator {
        username
        profilePicture {
          type
          data
        }
      }
      pet {
        photos {
          id
          data
          type
        }
      }
    }
    publicationsNotViewed {
      id
      type
      createdAt
      creator {
        username
        profilePicture {
          type
          data
        }
      }
      pet {
        photos {
          id
          data
          type
        }
      }
    }
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

const reportPublication = async payload => {
  const response = await GraphQLClient.request(
    REPORT_PUBLICATION_MUTATION,
    payload
  );
  return response.reportPublication;
};

const deletePublication = async payload => {
  const response = await GraphQLClient.request(
    DELETE_PUBLICATION_MUTATION,
    payload
  );
  return response.deletePublication;
};

const getMatchingPublications = async payload => {
  const response = await GraphQLClient.request(GET_MATCHINGS_QUERY, payload);
  return response.getMatchingPublications;
};

export default {
  deletePublication,
  getMatchingPublications,
  getPublications,
  getPublication,
  reportPublication
};
