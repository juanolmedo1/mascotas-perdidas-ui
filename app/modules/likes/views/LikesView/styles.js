import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    width: '100%',
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M
  },
  title: {
    fontSize: fonts.sizes.XL,
    ...fonts.weights.regular
  },
  content: {
    flex: 1,
    width: '100%'
  },
  contentText: {
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular
  }
});
