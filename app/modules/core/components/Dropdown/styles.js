import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const baseArrow = {
  position: 'absolute',
  right: variables.spacings.M,
  top: 25,
  width: 0,
  height: 0,
  borderLeftWidth: 8,
  borderLeftColor: 'transparent',
  borderRightWidth: 8,
  borderRightColor: 'transparent',
  borderTopWidth: 8
};

const basePickerContainer = {
  height: 50,
  width: 260,
  borderWidth: 1,
  borderRadius: 5
};

export default StyleSheet.create({
  container: {
    marginVertical: variables.spacings.XS
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginBottom: variables.spacings.XS,
    color: variables.colors.textBlack
  },
  activePickerContainer: {
    ...basePickerContainer,
    borderColor: variables.colors.borderOrange
  },
  inactivePickerContainer: {
    ...basePickerContainer,
    borderColor: variables.colors.borderDarkGrey
  },
  picker: {
    backgroundColor: 'transparent',
    zIndex: 1,
    marginLeft: 8
  },
  activeArrow: {
    ...baseArrow,
    borderTopColor: variables.colors.borderOrange
  },
  inactiveArrow: {
    ...baseArrow,
    borderTopColor: variables.colors.borderDarkGrey
  }
});
