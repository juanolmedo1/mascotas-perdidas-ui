import GraphQLClient from '@core/utils/GraphQLClient';

const GET_PROVINCES_QUERY = `{
  getProvinces {
    id
    nombre
  }
}`;

const getProvinces = async () => {
  const response = await GraphQLClient.request(GET_PROVINCES_QUERY);
  return response.getProvinces.map(province => ({
    id: province.id,
    value: province.nombre,
    label: province.nombre
  }));
};

const GET_LOCATIONS_QUERY = `query getLocations($province: String!) {
  getLocations(province: $province) {
    id
    nombre
  }
}`;

const getLocations = async province => {
  const response = await GraphQLClient.request(GET_LOCATIONS_QUERY, {
    province
  });
  return response.getLocations.map(location => ({
    id: location.id,
    value: location.nombre,
    label: location.nombre
  }));
};

export default {
  getProvinces,
  getLocations
};
