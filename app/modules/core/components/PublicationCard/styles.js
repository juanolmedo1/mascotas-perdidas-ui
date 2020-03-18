import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    borderRadius: 8,
    flexDirection: 'column',
    elevation: 1,
    margin: variables.spacings.M
  },
  image: {
    width: 149,
    height: 160,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  info: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
