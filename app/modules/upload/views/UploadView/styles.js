import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  customHeader: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    height: 40,
    width: 60,
    position: 'absolute',
    left: variables.spacings.XS,
    justifyContent: 'flex-end',
    paddingBottom: variables.spacings.S,
    alignItems: 'center'
  },
  cancelText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textBlack
  },
  titleContainer: {
    height: 40,
    width: 200,
    justifyContent: 'flex-end',
    paddingBottom: variables.spacings.S,
    alignItems: 'center'
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.M,
    letterSpacing: 1,
    color: variables.colors.textBlack
  },
  text: {
    ...fonts.weights.regular,
    marginBottom: variables.spacings.XXS,
    fontSize: fonts.sizes.M,
    marginHorizontal: variables.spacings.L,
    textAlign: 'center'
  }
});
