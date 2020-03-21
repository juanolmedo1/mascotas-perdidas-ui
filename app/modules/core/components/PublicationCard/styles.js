import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    margin: variables.spacings.M
  },
  image: {
    width: 148,
    height: 160,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  info: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: variables.spacings.S
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS
  }
});
