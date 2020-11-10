import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  close: {
    alignItems: 'flex-end'
  },
  checkContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderGreen,
    borderRadius: 45,
    marginBottom: variables.spacings.XL
  },
  errorContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderRed,
    borderRadius: 45,
    marginBottom: variables.spacings.XL
  },
  icon: {
    marginTop: variables.spacings.S,
    marginRight: variables.spacings.M
  },
  response: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  responseContainer: {
    flex: 1
  }
});
