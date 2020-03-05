import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: variables.colors.backgroundWhite
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: variables.spacings.S
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  username: {
    marginLeft: variables.spacings.S,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  },
  iconContainer: {
    marginRight: variables.spacings.S
  }
});
