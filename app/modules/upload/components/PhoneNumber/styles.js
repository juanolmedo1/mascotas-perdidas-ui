import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    width: 240,
    justifyContent: 'center'
  },
  title: {
    marginBottom: variables.spacings.XS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: variables.spacings.M,
    marginLeft: variables.spacings.L,
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular,
    borderColor: variables.colors.borderDarkGrey
  }
});
