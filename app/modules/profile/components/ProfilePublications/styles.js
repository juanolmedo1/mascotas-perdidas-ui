import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    height: width / 3,
    width: width / 3,
    borderWidth: 1,
    borderColor: variables.colors.borderWhite
  }
});
