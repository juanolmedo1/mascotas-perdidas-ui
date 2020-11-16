import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  arrowsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    position: 'absolute',
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    bottom: 0
  },
  buttonContainer: {
    marginBottom: variables.spacings.M
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: variables.spacings.S
  },
  confirmationText: {
    ...fonts.weights.bold,
    fontSize: fonts.sizes.SM,
    textAlign: 'center'
  },
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
  header: {
    paddingHorizontal: variables.spacings.L,
    paddingTop: variables.spacings.M,
    flexDirection: 'row',
    justifyContent: 'center',
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
  iconBorderFail: {
    borderColor: variables.colors.borderRed
  },
  iconBorderSuccess: {
    borderColor: variables.colors.borderGreen
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular,
    marginLeft: variables.spacings.M
  }
});
