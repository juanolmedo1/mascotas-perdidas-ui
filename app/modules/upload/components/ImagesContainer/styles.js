import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-around'
  },
  imageContainer: {
    width: 101,
    height: 101,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderColor: variables.colors.borderDarkGrey
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8
  }
});
