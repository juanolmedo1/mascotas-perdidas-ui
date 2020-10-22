import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '30%',
    width: '100%',
    zIndex: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 2
  },
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});
