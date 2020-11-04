import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  iconContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPoint: {
    position: 'absolute',
    right: variables.spacings.M,
    top: variables.spacings.XS,
    height: 6,
    width: 6,
    backgroundColor: variables.colors.backgroundOrange,
    borderRadius: 3
  }
});
