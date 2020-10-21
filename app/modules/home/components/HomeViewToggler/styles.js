import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

const baseIconContainer = {
  flex: 1,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  viewOptionsContainer: {
    position: 'absolute',
    height: 46,
    width: '30%',
    right: 0,
    bottom: 0,
    zIndex: 3,
    flex: 1,
    flexDirection: 'row',
    marginRight: variables.spacings.M,
    marginBottom: variables.spacings.S
  },
  viewOptionActive: {
    ...baseIconContainer,
    backgroundColor: variables.colors.backgroundOrange
  },
  viewOptionInactive: {
    ...baseIconContainer,
    backgroundColor: variables.colors.backgroundWhite
  },
  leftIcon: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  rightIcon: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});
