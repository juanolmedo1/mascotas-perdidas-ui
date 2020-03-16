import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    height: 190
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    marginBottom: variables.spacings.S,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  note: {
    textAlign: 'center',
    marginTop: variables.spacings.S,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS
  }
});
