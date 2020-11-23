import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 3
  },
  publication: {
    height: width / 3 - 4,
    width: width / 3 - 4,
    margin: 1
  }
});
