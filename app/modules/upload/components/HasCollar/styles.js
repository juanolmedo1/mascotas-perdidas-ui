import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    height: 70,
    width: 120
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginBottom: variables.spacings.XS
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginHorizontal: variables.spacings.XS
  }
});
