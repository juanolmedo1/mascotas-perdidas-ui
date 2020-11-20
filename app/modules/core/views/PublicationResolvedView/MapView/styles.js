import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  introductionIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introductionText: {
    flex: 5,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    textAlign: 'left'
  },
  introductionContainer: {
    paddingHorizontal: variables.spacings.M,
    paddingBottom: variables.spacings.S,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L,
    color: variables.colors.textBlack
  },
  ubicationSelectorContainer: {
    flex: 1
  }
});
