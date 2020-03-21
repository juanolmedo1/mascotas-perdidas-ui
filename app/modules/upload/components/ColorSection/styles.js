import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: variables.spacings.XS
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    marginBottom: variables.spacings.XXS,
    ...fonts.weights.bold,
    fontSize: fonts.sizes.S
  }
});
