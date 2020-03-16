import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: variables.colors.backgroundWhite
  },
  image: {
    width,
    height: '100%'
  },
  carousel: {
    height: 300
  },
  informationContainer: {
    flex: 1,
    backgroundColor: 'red'
  }
});
