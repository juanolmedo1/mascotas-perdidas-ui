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
    borderColor: variables.colors.borderWhite,
    borderRadius: 4,
    letterSpacing: 1,
    fontSize: fonts.sizes.S,
    ...fonts.weights.regular,
    paddingLeft: variables.spacings.L,
    marginTop: variables.spacings.L
  },
  buttonsContainer: {
    flex: 4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  loginButton: {
    marginTop: 32,
    marginBottom: variables.spacings.M
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
