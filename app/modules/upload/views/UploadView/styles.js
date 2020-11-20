import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  customHeader: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    height: 60,
    width: 60,
    position: 'absolute',
    left: variables.spacings.XS,
    justifyContent: 'flex-end',
    paddingBottom: variables.spacings.M,
    alignItems: 'center'
  },
  cancelText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textBlack
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
    paddingVertical: variables.spacings.S,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    height: 60,
    width: 200,
    justifyContent: 'flex-end',
    paddingBottom: variables.spacings.M,
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
    fontSize: fonts.sizes.S,
    marginHorizontal: variables.spacings.S,
    marginVertical: variables.spacings.M,
    textAlign: 'left'
  }
});
