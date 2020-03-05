import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

const baseButton = {
  minHeight: 40,
  width: 260,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4
};

const baseText = {
  ...fonts.weights.semibold,
  fontSize: fonts.sizes.M
};

export default StyleSheet.create({
  primary: {
    ...baseButton,
    backgroundColor: variables.colors.backgroundOrange
  },
  secondary: {
    ...baseButton,
    backgroundColor: variables.colors.backgroundWhite
  },
  tertiary: {
    ...baseButton,
    borderColor: variables.colors.borderOrange,
    borderWidth: 1
  },
  primaryText: {
    ...baseText,
    color: variables.colors.textWhite
  },
  secondaryText: {
    ...baseText,
    color: variables.colors.textOrange
  },
  tertiaryText: {
    ...baseText,
    color: variables.colors.textOrange
  },
  primaryArrow: {
    color: variables.colors.textWhite
  },
  secondaryArrow: {
    color: variables.colors.textOrange
  },
  tertiaryArrow: {
    color: variables.colors.textOrange
  },
  leftArrow: {
    position: 'absolute',
    left: variables.spacings.M
  },
  rightArrow: {
    position: 'absolute',
    right: variables.spacings.M
  }
});
