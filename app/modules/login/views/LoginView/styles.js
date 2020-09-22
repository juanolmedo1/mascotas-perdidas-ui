import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.colors.backgroundDarkOrange,
    alignItems: 'center'
  },
  logoContainer: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftPaw: {
    transform: [
      {
        rotateZ: '-20deg'
      }
    ],
    marginRight: 5
  },
  rightPaw: {
    transform: [
      {
        rotateZ: '20deg'
      }
    ],
    marginLeft: 5,
    marginBottom: 80
  },
  inputsContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  input: {
    width: 260,
    height: 40,
    borderWidth: 1,
    color: variables.colors.textWhite,
    borderRadius: 4,
    borderColor: variables.colors.borderWhite,
    letterSpacing: 1,
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular,
    paddingLeft: variables.spacings.L,
    marginTop: variables.spacings.S
  },
  buttonsContainer: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  errorContainer: {
    width: 260,
    height: 10,
    marginTop: variables.spacings.XXS
  },
  errorMessage: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textWhite,
    textAlign: 'right'
  },
  loginButton: {
    marginTop: 40
  },
  registerButton: {
    marginTop: variables.spacings.L
  },
  registerText: {
    color: variables.colors.textWhite,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  },
  forgotPasswordButton: {
    position: 'absolute',
    bottom: variables.spacings.L
  },
  forgotPasswordText: {
    color: variables.colors.textWhite,
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  }
});
