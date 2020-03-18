import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    width: 260,
    justifyContent: 'center'
  },
  title: {
    marginBottom: variables.spacings.XS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: variables.colors.borderDarkGrey,
    marginLeft: variables.spacings.L
  },
  icon: {
    marginHorizontal: variables.spacings.S
  },
  textInput: {
    flex: 1,
    height: 45,
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular
  }
});
