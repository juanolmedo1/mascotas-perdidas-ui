import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  menu: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearButton: {
    flexDirection: 'row',
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: variables.spacings.S
  },
  changeUbicationButton: {
    flexDirection: 'row',
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: variables.spacings.S
  },
  icon: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  applyButton: {
    height: '100%',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  applyText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textOrange
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L,
    letterSpacing: 1,
    color: variables.colors.textBlack
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
