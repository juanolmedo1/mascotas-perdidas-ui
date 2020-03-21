import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 110,
    width: 160,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    marginTop: variables.spacings.XS
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L
  },
  icon: {
    paddingTop: variables.spacings.XS
  },
  iconColor: {
    color: variables.colors.backgroundGreen
  }
});
