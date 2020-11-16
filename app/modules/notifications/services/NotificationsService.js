import GraphQLClient from '@core/utils/GraphQLClient';

const GET_NOTIFICATIONS_QUERY = `query getUserNotifications($userId: String!){
  getUserNotifications(userId: $userId){
    id
    type
    photos
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

const DELETE_NOTIFICATION_MUTATION = `mutation deleteNotification($id: String!){
  deleteNotification(id: $id){
    id
    type
  }
}`;

const getUserNotifications = async payload => {
  const response = await GraphQLClient.request(
    GET_NOTIFICATIONS_QUERY,
    payload
  );
  return response.getUserNotifications;
};

const deleteNotification = async payload => {
  const response = await GraphQLClient.request(
    DELETE_NOTIFICATION_MUTATION,
    payload
  );
  return response.deleteNotification;
};

export default {
  deleteNotification,
  getUserNotifications
};
