import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 3
  },
  publicationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    height: width / 3 - 4,
    width: width / 3 - 4,
    margin: 1
  }
});
