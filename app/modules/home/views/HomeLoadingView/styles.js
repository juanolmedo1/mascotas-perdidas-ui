import { StyleSheet } from 'react-native';
import variables from '@app/styles/variables';
import fonts from '@app/styles/fonts';

export default StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 0
  },
  container: {
    height: 200,
    width: 150,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 1,
    margin: 15
  },
  ubicationTextContainer: {
    flexDirection: 'row',
    marginHorizontal: variables.spacings.L,
    marginBottom: variables.spacings.S,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ubicationText: {
    height: 10,
    width: 70,
    borderRadius: 4
  },
  divider: {
    ...fonts.weights.regular,
    fontSize: fonts.sizes.XS,
    color: variables.colors.textLightGrey,
    marginHorizontal: variables.spacings.XS
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    backgroundColor: variables.colors.backgroundWhite
  },
  profileImage: {
    height: 26,
    width: 26,
    borderRadius: 12,
    marginLeft: variables.spacings.S
  },
  username: {
    width: 80,
    height: 10,
    borderRadius: 4,
    marginLeft: variables.spacings.XS
  },
  image: {
    width: 150,
    height: 130
  },
  info: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    paddingHorizontal: variables.spacings.S,
    backgroundColor: variables.colors.backgroundWhite
  },
  date: {
    height: 16,
    width: 50,
    borderRadius: 4
  },
  type: {
    height: 24,
    width: 24,
    borderRadius: 4
  }
});
