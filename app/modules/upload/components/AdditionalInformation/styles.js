import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-start'
  },
  title: {
    marginBottom: variables.spacings.XS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  textInput: {
    height: 150,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: variables.spacings.M,
    marginHorizontal: variables.spacings.L,
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular,
    borderColor: variables.colors.borderDarkGrey
  }
});
