import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  close: {
    alignItems: 'flex-end'
  },
  checkContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderGreen,
    borderRadius: 45,
    margin: variables.spacings.M
  },
  errorContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderRed,
    borderRadius: 45,
    marginBottom: variables.spacings.XL
  },
  icon: {
    marginTop: variables.spacings.S,
    marginRight: variables.spacings.M
  },
  image: {
    width: 200,
    height: 200
  },
  imageContainer: {
    margin: variables.spacings.M
  },
  response: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: variables.spacings.L
  },
  responseContainer: {
    flex: 1
  },
  responseText: {
    ...fonts.weights.bold,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  }
});
