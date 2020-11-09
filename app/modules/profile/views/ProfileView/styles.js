import { StyleSheet } from 'react-native';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  scroll: {
    flexGrow: 1
  },
  noPublicationsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noPublicationsText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M
  }
});
