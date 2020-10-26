import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapContainer: {
    flex: 1,
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
