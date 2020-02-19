import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    borderRadius: 8,
    flexDirection: 'column',
    elevation: 2
  },
  image: {
    width: '100%',
    height: '80%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
