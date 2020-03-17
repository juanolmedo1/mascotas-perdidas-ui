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
    ...fonts.weights.bold,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  },
  mainTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: 300,
    height: 200,
    padding: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: variables.colors.borderOrange,
    backgroundColor: variables.colors.backgroundWhite
  },
  modalScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundLightGrey,
    opacity: 0.8
  },
  option: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: variables.colors.borderOrange,
    padding: variables.spacings.XXS,
    marginVertical: variables.spacings.S,
    marginHorizontal: variables.spacings.S,
    backgroundColor: variables.colors.backgroundWhite
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionText: {
    ...fonts.weights.bold,
    fontSize: fonts.sizes.M,
    color: variables.colors.textOrange
  }
});
