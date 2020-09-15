import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  }
});
