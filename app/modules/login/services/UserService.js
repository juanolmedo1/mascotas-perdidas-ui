import GraphQLClient from '@core/utils/GraphQLClient';

const USER_LOGIN_QUERY = `query login($username: String!, $password: String!){
  login(options: {
    username: $username,
    password: $password
  }){
    id
    firstName
    lastName
    phoneNumber
    dateOfBirth
    email
    username
    profilePicture {
      data
    }
  }
}`;

const login = async payload => {
  const response = await GraphQLClient.request(USER_LOGIN_QUERY, payload);
  return response.login;
};

const GET_USER_PUBLICATIONS_QUERY = `query getUserPublications($id: String!){
    getUserPublications(userId: $id){
      id
      pet {
        photos {
          id
          type
          data
        }
      }
    }
  }`;

const getUserPublications = async payload => {
  const response = await GraphQLClient.request(
    GET_USER_PUBLICATIONS_QUERY,
    payload
  );
  return response.getUserPublications;
};

const REGISTER_USER_MUTATION = `mutation createUser(
  $name: String!,
  $lastname: String!,
  $phone: String!,
  $dateOfBirth: String!,
  $email: String!,
  $username: String!,
  $password: String!,
  $data: String!,
  $type: String!
){
  createUser(options: {
    firstName: $name
    lastName: $lastname
    phoneNumber: $phone
    dateOfBirth: $dateOfBirth
    email: $email
    username: $username
    password: $password
    photo: {
      type: $type
      data: $data
    }
  }){
    id
  }
}`;

const registerUser = async payload => {
  const response = await GraphQLClient.request(REGISTER_USER_MUTATION, payload);
  return response.createUser;
};

export default {
  login,
  getUserPublications,
  registerUser
};
