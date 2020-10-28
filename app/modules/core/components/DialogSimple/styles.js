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
  content: {
    flex: 3,
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
