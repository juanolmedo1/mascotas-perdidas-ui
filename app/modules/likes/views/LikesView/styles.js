import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundWhite
  },
  block: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  }
});
