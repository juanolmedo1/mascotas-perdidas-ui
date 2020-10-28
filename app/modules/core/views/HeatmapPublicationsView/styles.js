import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  contentContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dialogText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    textAlign: 'center'
  },
  iconBorderFail: {
    borderColor: variables.colors.borderRed
  },
  iconBorderWarning: {
    borderColor: variables.colors.borderOrange
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: variables.spacings.L
  },
  introductionIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introductionText: {
    flex: 5,
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.S,
    textAlign: 'center'
  },
  introductionContainer: {
    paddingHorizontal: variables.spacings.M,
    paddingBottom: variables.spacings.S,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  }
});
