import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    letterSpacing: 1,
    color: variables.colors.textBlack,
    marginLeft: variables.spacings.S
  },
  block: {
    marginVertical: variables.spacings.XS
  },
  rewardContainer: {
    marginTop: variables.spacings.M,
    marginHorizontal: variables.spacings.L,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
    marginBottom: variables.spacings.S,
    alignItems: 'center'
  }
});
