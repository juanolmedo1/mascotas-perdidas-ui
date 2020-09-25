import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.backgroundWhite,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.S
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  inputsContainer: {},
  icon: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  buttonContainer: {
    marginTop: variables.spacings.L
  }
});
