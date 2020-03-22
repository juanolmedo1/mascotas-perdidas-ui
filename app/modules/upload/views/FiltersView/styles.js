import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  subtitle: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
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
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  }
});
