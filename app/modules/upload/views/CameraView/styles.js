import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  camera: {
    flex: 1
  },
  closeIcon: {
    position: 'absolute',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  captureButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: variables.colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center'
  },
  galleryButton: {
    position: 'absolute',
    left: variables.spacings.S,
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
