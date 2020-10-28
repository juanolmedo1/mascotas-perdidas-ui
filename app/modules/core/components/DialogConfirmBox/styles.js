import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@styles/variables';

export default StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    height: 250,
    width: '90%',
    borderRadius: 8,
    backgroundColor: variables.colors.backgroundWhite,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginTop: variables.spacings.L,
    textAlign: 'center'
  },
  content: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: variables.spacings.L,
    alignItems: 'center',
    paddingHorizontal: variables.spacings.S
  },
  title: {
    width: '100%',
    ...fonts.weights.bold,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
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
