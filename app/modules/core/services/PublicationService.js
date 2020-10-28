import GraphQLClient from '@core/utils/GraphQLClient';

const GET_PUBLICATIONS_QUERY = `query getFilteredPublications(
    $latitude: Float!, 
    $longitude: Float!, 
    $publicationType: [String!]!, 
    $petType: [String!]!, 
    $petGender: [String!]!, 
    $petSize: [String!]!
  ){
    getFilteredPublications(options: { 
      ubicationData: {
        latitude: $latitude
        longitude: $longitude
      }
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
      ubication {
        firstLatitude
        firstLongitude
        country
        administrativeAreaLevel1
        locality
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
    ubication {
      firstLatitude
      firstLongitude
    }
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
    ubication {
      id
      firstLatitude
      firstLongitude
      lastLatitude
      lastLongitude
      country
      administrativeAreaLevel1
      administrativeAreaLevel2
      locality      
    }
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

const GET_HEATMAP_PUBLICATIONS_QUERY = `query getHeatMapPublications($publicationId: String!, $offset: Float!){
  getHeatMapPublications(options: { 
    publicationId: $publicationId
    offset: $offset
  }){
    id
    ubication {
      lastLatitude
      lastLongitude
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

const getHeatMapPublications = async payload => {
  const response = await GraphQLClient.request(
    GET_HEATMAP_PUBLICATIONS_QUERY,
    payload
  );
  return response.getHeatMapPublications;
};

export default {
  deletePublication,
  getHeatMapPublications,
  getMatchingPublications,
  getPublications,
  getPublication,
  reportPublication
};
