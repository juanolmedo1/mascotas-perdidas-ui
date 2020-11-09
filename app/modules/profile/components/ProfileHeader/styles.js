import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const baseIcon = {
  height: 50,
  width: 50,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2
};

export default StyleSheet.create({
  container: {
    height: 280,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: variables.colors.borderLightGrey
  },
  informationContainer: {
    width: '100%',
    flex: 1
  },
  imageContainer: {
    paddingHorizontal: variables.spacings.M,
    marginTop: variables.spacings.L,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: variables.spacings.XS
  },
  countItem: {
    alignItems: 'center',
    minWidth: 80,
    marginHorizontal: variables.spacings.XS
  },
  itemDivider: {
    backgroundColor: variables.colors.backgroundDarkGrey,
    height: '60%',
    alignSelf: 'center',
    width: 0.5
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: variables.colors.backgroundWhite,
    borderRadius: 50
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginTop: variables.spacings.S
  },
  subtitle: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS
  },
  number: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L
  },
  iconsContainer: {
    marginBottom: variables.spacings.S,
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  messageIcon: {
    ...baseIcon,
    borderColor: variables.colors.borderBlue
  },
  likesIcon: {
    ...baseIcon,
    borderColor: variables.colors.borderRed
  },
  notificationsIcon: {
    ...baseIcon,
    borderColor: variables.colors.borderGreen
  },
  settingIcon: {
    ...baseIcon,
    borderColor: variables.colors.borderDarkGrey
  },
  logoutIcon: {
    ...baseIcon,
    borderColor: variables.colors.borderRed
  },
  logout: {
    marginRight: variables.spacings.XS
  }
});
