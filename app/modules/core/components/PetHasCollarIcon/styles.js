import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 100,
    width: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: variables.spacings.XS
  },
  borderGreen: {
    borderColor: variables.colors.borderGreen
  },
  borderRed: {
    borderColor: variables.colors.borderRed
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.S
  },
  checkColor: {
    color: variables.colors.backgroundGreen
  },
  closeColor: {
    color: variables.colors.backgroundRed
  }
});
