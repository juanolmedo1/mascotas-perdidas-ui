import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const breedElementStyles = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: variables.spacings.XS,
  borderTopWidth: 1
};

export default StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backContainer: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0
  },
  breedElement: {
    ...breedElementStyles
  },
  breedElementSelected: {
    ...breedElementStyles,
    backgroundColor: variables.colors.backgroundOrange
  },
  breedImage: {
    height: 120,
    width: 120
  },
  breedLabel: {
    marginHorizontal: variables.spacings.S,
    width: '30%',
    textAlign: 'center'
  },
  breedList: {
    margin: variables.spacings.S
  },
  breedProb: {
    ...fonts.weights.bold,
    marginHorizontal: variables.spacings.S
  },
  buttonContainer: {
    marginBottom: variables.spacings.S
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: variables.spacings.M
  },
  introductionContainer: {
    marginHorizontal: variables.spacings.L
  },
  introductionDescription: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.SM,
    textAlign: 'center'
  },
  introductionTitle: {
    marginBottom: variables.spacings.S,
    ...fonts.weights.bold,
    fontSize: fonts.sizes.M,
    textAlign: 'center'
  },
  noDetectionButtonContainer: {
    marginVertical: variables.spacings.XL
  },
  noDetectionIcon: {
    paddingHorizontal: variables.spacings.S
  },
  noDetectionIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end',
    marginVertical: variables.spacings.M
  },
  noDetectionContainer: {
    flex: 1,
    paddingHorizontal: variables.spacings.L,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noDetectionText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    textAlign: 'center'
  },
  title: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.L
  }
});
