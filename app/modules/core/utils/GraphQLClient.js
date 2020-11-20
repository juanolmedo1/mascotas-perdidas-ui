import AuthService from '@login/services/AuthService';
import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://192.168.0.31:4000/graphql';

const createGraphQLClient = async () => {
  const accessToken = await AuthService.getAccessToken();
  return new GraphQLClient(endpoint, {
    headers: { authorization: `Bearer ${accessToken}` }
  });
};

export default createGraphQLClient;
