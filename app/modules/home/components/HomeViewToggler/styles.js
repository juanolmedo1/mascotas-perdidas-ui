import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  viewOptionIcon: {
    padding: variables.spacings.M
  },
  viewOptionsContainer: {
    position: 'absolute',
    width: '25%',
    right: 0,
    top: '89%',
    zIndex: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: variables.spacings.M
  },
  viewOptionActive: {
    backgroundColor: variables.colors.backgroundOrange
  },
  viewOptionInactive: {
    backgroundColor: variables.colors.backgroundWhite
  }
});
