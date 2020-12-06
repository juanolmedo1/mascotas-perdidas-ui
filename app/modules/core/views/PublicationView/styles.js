import { StyleSheet, Dimensions } from 'react-native';
import variables from '@styles/variables';
import fonts from '@styles/fonts';

const { width } = Dimensions.get('window');
const photoButtonBase = {
  backgroundColor: variables.colors.backgroundWhite,
  height: 8,
  width: 8,
  borderRadius: 4,
  marginHorizontal: 3
};

export default StyleSheet.create({
  additionalInfoContainer: {
    marginHorizontal: variables.spacings.M,
    marginBottom: variables.spacings.M
  },
  buttonContainer: {
    flex: 1,
    marginVertical: variables.spacings.XS,
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
  block: {
    flexDirection: 'row',
    marginTop: variables.spacings.M,
    marginHorizontal: variables.spacings.M
  },
  inactivePublicationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: variables.spacings.S
  },
  inactivePublicationText: {
    paddingHorizontal: variables.spacings.L,
    paddingVertical: variables.spacings.S,
    borderRadius: 4,
    borderColor: variables.colors.borderRed,
    borderWidth: 1,
    color: variables.colors.textRed
  },
  imageSlider: {
    height: 250
  },
  carousel: {
    height: 300
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerIconContainer: {
    paddingVertical: variables.spacings.M,
    paddingRight: variables.spacings.M
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: variables.spacings.S
  },
  photoButtomsContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 30
  },
  photoButtomSelected: {
    ...photoButtonBase,
    opacity: 1
  },
  photoButtonNotSelected: {
    ...photoButtonBase,
    opacity: 0.4
  },
  image: {
    width,
    height: '100%'
  },
  subtitle: {
    ...fonts.weights.semibold,
    fontSize: fonts.sizes.L,
    marginBottom: variables.spacings.XS
  },
  date: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textDarkGrey
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  dialogText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.M,
    textAlign: 'center'
  },
  divider: {
    height: 0.5,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: variables.colors.backgroundDarkGrey,
    marginTop: variables.spacings.XXXS,
    marginBottom: variables.spacings.M
  },
  extraActionContainer: {
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0
  },
  phone: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    marginLeft: variables.spacings.S
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  similarPublicationsContainer: {
    marginHorizontal: variables.spacings.M,
    marginBottom: variables.spacings.M
  },
  text: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    lineHeight: 20
  },
  title: {
    fontSize: fonts.sizes.L,
    ...fonts.weights.regular
  },
  modal: {
    justifyContent: 'flex-end',
    margin: variables.spacings.M
  },
  modalContainer: {
    borderRadius: 10,
    backgroundColor: variables.colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCancelButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: variables.colors.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: variables.spacings.S
  },
  modalText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S
  },
  modalButtonContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalDeleteText: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.S,
    color: variables.colors.textRed
  },
  modalDivider: {
    width: '100%',
    height: 0.5,
    backgroundColor: variables.colors.backgroundLightGrey
  },
  contentContainer: {
    height: '100%',
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
  iconBorderSuccess: {
    borderColor: variables.colors.borderGreen
  },
  iconBorderFail: {
    borderColor: variables.colors.borderRed
  },
  ubicationContainer: {
    height: 300,
    width: '100%'
  },
  ubicationTitleContainer: {
    marginHorizontal: variables.spacings.M
  }
});
