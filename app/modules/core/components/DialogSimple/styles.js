import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@styles/variables';

export default StyleSheet.create({
  modalScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundLightGrey,
    opacity: 0.95
  },
  modalContainer: {
    width: 300,
    height: 300,
    padding: 5,
    borderRadius: 8,
    elevation: 10,
    backgroundColor: variables.colors.backgroundWhite
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 4,
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: variables.spacings.S
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  closeButton: {
    width: 110,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: variables.colors.borderBlack
  },
  closeText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    color: variables.colors.textBlack
  }
});
