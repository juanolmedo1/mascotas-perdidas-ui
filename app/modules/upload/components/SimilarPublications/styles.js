import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@styles/variables';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    ...fonts.weights.bold,
    fontSize: fonts.sizes.M,
    textAlign: 'center',
    marginHorizontal: variables.spacings.L
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  imageContainer: {
    margin: variables.spacings.S
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10
  }
});
