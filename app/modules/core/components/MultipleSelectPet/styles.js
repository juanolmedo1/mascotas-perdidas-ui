import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    height: 150,
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    marginBottom: variables.spacings.XXS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  subtitle: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
