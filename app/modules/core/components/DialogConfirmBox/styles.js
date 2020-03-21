import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@styles/variables';

export default StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  },
  content: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: variables.spacings.S
  },
  modalContainer: {
    width: 300,
    height: 200,
    padding: 5,
    borderRadius: 8,
    elevation: 10,
    backgroundColor: variables.colors.backgroundWhite
  },
  modalScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundLightGrey,
    opacity: 0.95
  },
  confirmOption: {
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: variables.colors.backgroundOrange
  },
  cancelOption: {
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: variables.colors.borderBlack
  },
  optionsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cancelText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    color: variables.colors.textBlack
  },
  confirmText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    color: variables.colors.textWhite
  }
});
