import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

const baseIcon = {
  height: 24,
  width: 24,
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center'
};
export default StyleSheet.create({
  lost: {
    ...baseIcon,
    backgroundColor: variables.colors.backgroundRed
  },
  found: {
    ...baseIcon,
    backgroundColor: variables.colors.backgroundGreen
  },
  adoption: {
    ...baseIcon,
    backgroundColor: variables.colors.backgroundBlue
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textWhite
  }
});
