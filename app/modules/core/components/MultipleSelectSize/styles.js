import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    height: 110,
    width: '100%',
    justifyContent: 'center'
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end'
  },
  block: {
    minWidth: 90,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  icon: {
    marginBottom: variables.spacings.S
  },
  title: {
    marginBottom: variables.spacings.XXS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  }
});
