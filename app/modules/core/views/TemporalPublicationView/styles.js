import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
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
    marginTop: variables.spacings.M,
    marginHorizontal: variables.spacings.M
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
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
  divider: {
    height: 0.5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: variables.colors.backgroundDarkGrey,
    marginTop: variables.spacings.XXXS,
    marginBottom: variables.spacings.M
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
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  },
  ubicationContainer: {
    height: 300,
    width: '100%'
  },
  ubicationTitleContainer: {
    marginHorizontal: variables.spacings.M
  },
  response: {
    flex: 1,
    marginTop: variables.spacings.XXL,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorContainer: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderRed,
    borderRadius: 45,
    marginBottom: variables.spacings.XL
  },
  responseText: {
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular,
    textAlign: 'center'
  },
  icon: {
    marginTop: variables.spacings.S,
    marginRight: variables.spacings.M
  }
});
