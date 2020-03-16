import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundWhite
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    letterSpacing: 1,
    color: variables.colors.textBlack
  },
  text: {
    ...fonts.weights.regular,
    marginBottom: variables.spacings.XXS,
    fontSize: fonts.sizes.M,
    marginHorizontal: variables.spacings.L,
    textAlign: 'center'
  }
});
