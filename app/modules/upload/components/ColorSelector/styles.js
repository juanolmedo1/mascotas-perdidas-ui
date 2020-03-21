import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: variables.spacings.L
  },
  title: {
    marginBottom: variables.spacings.XXS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M
  },
  subtitle: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    textAlign: 'center'
  }
});
