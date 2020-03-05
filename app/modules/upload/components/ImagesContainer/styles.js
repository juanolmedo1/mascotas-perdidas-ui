import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: variables.colors.borderDarkGrey,
    zIndex: 1
  },
  image: {
    height: 100,
    width: 100
  }
});
