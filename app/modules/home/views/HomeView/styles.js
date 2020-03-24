import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    flex: 1,
    alignItems: 'center'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
    marginTop: 5
  },
  column: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconsContainer: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: fonts.sizes.XL,
    ...fonts.weights.regular
  }
});
