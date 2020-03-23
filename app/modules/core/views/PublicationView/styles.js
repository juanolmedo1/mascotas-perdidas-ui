import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width,
    height: '100%'
  },
  carousel: {
    height: 300
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginHorizontal: variables.spacings.M,
    paddingTop: variables.spacings.S
  },
  additionalInfoContainer: {
    marginHorizontal: variables.spacings.M,
    marginBottom: variables.spacings.M
  },
  infoTitle: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.XS
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  },
  block: {
    flexDirection: 'row',
    marginHorizontal: variables.spacings.M
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  phone: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    marginLeft: variables.spacings.S
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textDarkGrey
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  }
});
