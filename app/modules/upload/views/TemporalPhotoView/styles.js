import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    width: '100%',
    height: 250
  },
  image: {
    height: '100%',
    width: '100%'
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: variables.spacings.L,
    alignItems: 'center'
  }
});
