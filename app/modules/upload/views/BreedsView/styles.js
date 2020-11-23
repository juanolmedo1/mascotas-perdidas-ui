import { StyleSheet } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

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
  contentContainer: {
    marginTop: variables.spacings.S
  },
  errorContainer: {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.colors.borderRed,
    borderRadius: 60,
    marginVertical: variables.spacings.XL
  },
  breedElement: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  breedImage: {
    height: 80,
    width: 80,
    borderRadius: 4
  },
  breedLabel: {
    width: '40%',
    textAlign: 'center'
  },
  otherBreedContainer: {
    flex: 1
  },
  otherBreedElement: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderColor: variables.colors.borderRed,
    borderRadius: 4,
    borderWidth: 0.8
  },
  otherBreedLabel: {
    color: variables.colors.textRed,
    textAlign: 'center'
  },
  breedList: {
    margin: variables.spacings.S
  },
  breedProb: {
    ...fonts.weights.bold,
    marginHorizontal: variables.spacings.S
  },
  inappropriateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: variables.spacings.M
  },
  inappropriateText: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  },
  inappropriateTitle: {
    ...fonts.weights.bold,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
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
    color: variables.colors.textBlack,
    fontSize: fonts.sizes.L,
    textAlign: 'center'
  },
  noDetectionButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDetectionIcon: {
    paddingHorizontal: variables.spacings.S
  },
  noDetectionIconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  noDetectionMessageContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  noDetectionContainer: {
    flex: 1
  },
  noDetectionTextContainer: {
    flex: 1,
    paddingHorizontal: variables.spacings.L,
    justifyContent: 'center'
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
