import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: variables.colors.backgroundWhite
  },
  image: {
    width,
    height: '100%'
  },
  carousel: {
    height: 300
  },
  informationContainer: {
    marginTop: variables.spacings.S,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  additionalInfoContainer: {
    padding: variables.spacings.M
  },
  infoTitle: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.S
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  },
  phoneNumberContainer: {
    padding: variables.spacings.M
  },
  phoneTitle: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.S
  },
  phone: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
