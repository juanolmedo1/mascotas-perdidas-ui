import { StyleSheet } from 'react-native';
import fonts from '@app/styles/fonts';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    elevation: 1,
    margin: variables.spacings.M,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  checkBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: variables.spacings.M
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    textAlign: 'center'
  },
  image: {
    flex: 6,
    width: 150,
    height: 130,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  userContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  username: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.SM,
    marginLeft: variables.spacings.XS
  },
  userProfileImage: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginLeft: variables.spacings.S
  }
});
