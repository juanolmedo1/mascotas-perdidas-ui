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
    borderBottomWidth: 0.2,
    borderBottomColor: variables.colors.borderLightGrey
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: variables.spacings.XL
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginTop: variables.spacings.S
  },
  iconsContainer: {
    position: 'absolute',
    bottom: variables.spacings.M,
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
  }
});
