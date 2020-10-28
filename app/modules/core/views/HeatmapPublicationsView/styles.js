import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  map: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  }
});
