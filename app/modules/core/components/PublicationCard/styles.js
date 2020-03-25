import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 1,
    margin: variables.spacings.M
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    backgroundColor: variables.colors.backgroundWhite
  },
  profileImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginLeft: variables.spacings.S
  },
  username: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    marginLeft: variables.spacings.XS
  },
  image: {
    width: 150,
    height: 130
  },
  info: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    paddingHorizontal: variables.spacings.S,
    backgroundColor: variables.colors.backgroundWhite
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS
  }
});
