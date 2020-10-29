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
    borderWidth: 2,
    borderColor: variables.colors.borderRed
  },
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 60
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
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
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    textAlign: 'left'
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
