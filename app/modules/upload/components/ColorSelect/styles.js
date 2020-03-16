import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    width: 130,
    justifyContent: 'flex-start'
  },
  title: {
    marginBottom: variables.spacings.XS,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    marginLeft: variables.spacings.L
  },
  picker: {
    flex: 1
  },
  buttonContainer: {
    width: 130,
    alignItems: 'center'
  },
  button: {
    width: 90,
    borderRadius: 4,
    paddingHorizontal: variables.spacings.XS,
    paddingVertical: variables.spacings.XS,
    borderWidth: 1,
    borderColor: variables.colors.borderOrange
  },
  text: {
    fontSize: fonts.sizes.M,
    ...fonts.weights.regular,
    color: variables.colors.textDarkGrey,
    textAlign: 'center'
  },
  color: {
    width: 30,
    height: 10,
    borderRadius: 2
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  close: {
    marginRight: variables.spacings.XS
  }
});
