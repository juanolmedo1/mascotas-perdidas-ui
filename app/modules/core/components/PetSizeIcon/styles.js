import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 140,
    width: 120,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: variables.spacings.XS,
    marginBottom: variables.spacings.XS
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L
  },
  value: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
