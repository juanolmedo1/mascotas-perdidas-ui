import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.backgroundWhite
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: variables.spacings.S
  }
});
