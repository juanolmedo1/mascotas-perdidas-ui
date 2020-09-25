import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const baseTextInput = {
  width: 260,
  height: 40,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: variables.colors.borderOrange,
  borderRadius: 4,
  marginVertical: variables.spacings.XXS
};
const baseIconContainer = {
  height: '100%',
  width: 30,
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  inputContainer: {
    marginBottom: variables.spacings.XS
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    color: variables.colors.textDarkGrey
  },
  textInputContainer: {
    ...baseTextInput,
    borderWidth: 1,
    borderColor: variables.colors.borderOrange
  },
  textInputErrorContainer: {
    ...baseTextInput,
    borderWidth: 2,
    borderColor: variables.colors.borderRed
  },
  iconContainer: {
    ...baseIconContainer,
    borderRightWidth: 1,
    borderRightColor: variables.colors.borderOrange
  },
  iconContainerError: {
    ...baseIconContainer,
    borderRightWidth: 2,
    borderRightColor: variables.colors.borderRed
  },
  input: {
    flex: 1,
    height: 40,
    color: variables.colors.textBlack,
    letterSpacing: 1,
    marginLeft: variables.spacings.XXS,
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular
  },
  errorTextContainer: {
    height: 10
  },
  errorText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textRed,
    textAlign: 'right'
  }
});
