import GraphQLClient from '@core/utils/GraphQLClient';

const GET_NOTIFICATIONS_QUERY = `query getUserNotifications($userId: String!){
  getUserNotifications(userId: $userId){
    id
    type
    photo
    publicationId
    createdAt
    userCreator {
      username
      profilePicture {
        data
      }
    }
  }
}`;

const getUserNotifications = async payload => {
  const response = await GraphQLClient.request(
    GET_NOTIFICATIONS_QUERY,
    payload
  );
  return response.getUserNotifications;
};

export default {
  getUserNotifications
};
