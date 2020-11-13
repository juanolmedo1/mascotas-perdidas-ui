import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  temporalPublicationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  permanentPublicationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L
  },
  description: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    textAlign: 'center',
    width: '90%'
  },
  iconTemporal: {
    marginTop: variables.spacings.M,
    marginBottom: variables.spacings.L
  },
  iconPermanent: {
    marginTop: variables.spacings.XS,
    marginBottom: variables.spacings.L
  }
});
