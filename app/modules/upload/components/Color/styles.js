import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

const wrapper = {
  width: 36,
  height: 36,
  borderRadius: 18,
  borderWidth: 4,
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  color: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: variables.colors.borderBlack
  },
  colorContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: variables.spacings.XXS,
    margin: variables.spacings.XXS
  },
  colorWrapper: {
    ...wrapper,
    borderColor: 'transparent'
  },
  colorWrapperSelected: {
    ...wrapper,
    borderColor: variables.colors.borderGreen
  }
});
