import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

const colorContainerStyles = {
  width: '15%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: variables.spacings.XXS,
  margin: variables.spacings.XXS
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
    ...colorContainerStyles
  },
  colorContainerSelected: {
    ...colorContainerStyles,
    borderBottomWidth: 2,
    borderColor: variables.colors.borderGreen
  }
});
