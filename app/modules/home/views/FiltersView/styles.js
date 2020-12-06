import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  header: {
    height: 60,
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
    backgroundColor: variables.colors.backgroundRed,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: variables.spacings.S
  },
  changeUbicationButton: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: variables.colors.backgroundBlue,
    width: 150,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: variables.spacings.S
  },
  buttonIcon: {
    position: 'absolute',
    left: variables.spacings.XS
  },
  buttonText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textWhite
  },
  ubicationSelectorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height
  },
  icon: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  applyButton: {
    height: '100%',
    width: 90,
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
