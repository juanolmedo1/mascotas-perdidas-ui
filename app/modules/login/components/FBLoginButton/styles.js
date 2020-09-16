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

export default StyleSheet.create({
  buttonContainer: {
    ...baseButton,
    backgroundColor: variables.colors.facebookColor
  },
  icon: {
    position: 'absolute',
    left: variables.spacings.S
  },
  text: {
    ...fonts.weights.semibold,
    marginLeft: variables.spacings.M,
    fontSize: fonts.sizes.S,
    color: variables.colors.textWhite
  }
});
