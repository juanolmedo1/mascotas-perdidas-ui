import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  }
});
