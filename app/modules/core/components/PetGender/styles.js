import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

const baseIcon = {
  height: 70,
  width: 70,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2
};

export default StyleSheet.create({
  selected: {
    ...baseIcon,
    borderColor: variables.colors.borderOrange,
    backgroundColor: variables.colors.backgroundOrange
  },
  notSelected: {
    ...baseIcon,
    borderColor: variables.colors.borderOrange
  },
  selectedIcon: {
    color: variables.colors.backgroundWhite
  },
  notSelectedIcon: {
    color: variables.colors.backgroundOrange
  }
});
