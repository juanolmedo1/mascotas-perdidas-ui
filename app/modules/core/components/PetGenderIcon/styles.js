import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  container: {
    height: 100,
    width: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderOrange,
    marginTop: variables.spacings.XS,
    marginBottom: variables.spacings.XS
  },
  title: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.S
  },
  value: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS
  }
});
