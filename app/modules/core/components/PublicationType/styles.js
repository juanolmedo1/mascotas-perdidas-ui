import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XXL
  }
});
