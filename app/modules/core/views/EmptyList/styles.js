import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundWhite
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  }
});
