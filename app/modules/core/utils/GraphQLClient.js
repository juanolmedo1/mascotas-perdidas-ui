import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://192.168.0.13:4000/graphql';

export default new GraphQLClient(endpoint, { headers: {} });
