import createGraphQLClient from '@core/utils/GraphQLClient';

const GET_FAVORITES_QUERY = `query getUserFavoritePublications($userId: String!){
  getUserFavoritePublications(userId: $userId){
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

const FAV_PUBLICATION_MUTATION = `mutation addUserFavoritePublication($userId: String!, $publicationId: String!){
    addUserFavoritePublication(options: {
        userId: $userId,
        publicationId: $publicationId
      }) {
        userId,
        publicationId,
        publication {
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

const UNFAV_PUBLICATION_MUTATION = `mutation removeUserFavoritePublication($userId: String!, $publicationId: String!){
    removeUserFavoritePublication(options: {
        userId: $userId,
        publicationId: $publicationId
      }) {
        userId,
        publicationId,
        publication {
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

const getFavoritesPublications = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(GET_FAVORITES_QUERY, payload);
  return response.getUserFavoritePublications;
};

const favPublication = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    FAV_PUBLICATION_MUTATION,
    payload
  );
  return response.addUserFavoritePublication;
};

const unfavPublication = async payload => {
  const GraphQLClient = await createGraphQLClient();
  const response = await GraphQLClient.request(
    UNFAV_PUBLICATION_MUTATION,
    payload
  );
  return response.removeUserFavoritePublication;
};

export default {
  favPublication,
  getFavoritesPublications,
  unfavPublication
};
