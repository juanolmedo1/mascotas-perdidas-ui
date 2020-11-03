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
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noNotifications: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  },
  contentText: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  },
  list: {
    width: '100%'
  }
});
