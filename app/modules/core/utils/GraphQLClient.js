import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://192.168.1.146:4000/graphql';

export default new GraphQLClient(endpoint, { headers: {} });
