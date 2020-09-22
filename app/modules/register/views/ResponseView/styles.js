import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.colors.backgroundWhite
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderGreen,
    borderRadius: 45,
    marginBottom: variables.spacings.XXL
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L
  }
});
