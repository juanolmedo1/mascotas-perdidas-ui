import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  responseContainer: {
    flex: 1
  },
  close: {
    alignItems: 'flex-end'
  },
  response: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginTop: variables.spacings.S,
    marginRight: variables.spacings.M
  },
  checkContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderGreen,
    borderRadius: 45,
    marginBottom: variables.spacings.XL
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
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.M,
    textAlign: 'center'
  }
});
