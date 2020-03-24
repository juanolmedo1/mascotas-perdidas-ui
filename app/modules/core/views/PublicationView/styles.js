import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  additionalInfoContainer: {
    marginHorizontal: variables.spacings.M,
    marginBottom: variables.spacings.M
  },
  backContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0
  },
  block: {
    flexDirection: 'row',
    marginHorizontal: variables.spacings.M
  },
  carousel: {
    height: 300
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginHorizontal: variables.spacings.M,
    paddingTop: variables.spacings.S
  },
  image: {
    width,
    height: '100%'
  },
  infoTitle: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.XS
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textDarkGrey
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  dialogText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  },
  divider: {
    height: 0.5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: variables.colors.backgroundDarkGrey,
    marginTop: variables.spacings.XXXS,
    marginBottom: variables.spacings.M
  },
  extraActionContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0
  },
  phone: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    marginLeft: variables.spacings.S
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  }
});
