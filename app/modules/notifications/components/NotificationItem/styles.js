import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: variables.spacings.XS,
    marginTop: variables.spacings.M
  },
  userImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: variables.spacings.XS
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  informationContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.S,
    textAlign: 'left'
  },
  description: {
    flex: 1,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    textAlign: 'left',
    marginTop: variables.spacings.XS
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: variables.spacings.XS
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 4
  },
  creationDate: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textDarkGrey
  }
});
