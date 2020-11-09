import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  publicationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 3
  },
  image: {
    height: width / 3 - 4,
    width: width / 3 - 4,
    margin: 1
  }
});
