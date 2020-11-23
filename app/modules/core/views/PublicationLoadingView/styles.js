import variables from '@app/styles/variables';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1
  },
  actions: {
    position: 'absolute',
    right: variables.spacings.M,
    top: -40,
    height: 20,
    width: 60,
    borderRadius: 4
  },
  headerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: variables.spacings.S
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  profileUsername: {
    height: 15,
    width: 130,
    borderRadius: 4,
    marginLeft: variables.spacings.S
  },
  publicationType: {
    height: 24,
    width: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: variables.spacings.S
  },
  image: {
    height: 250,
    width: '100%'
  },
  infoContainer: { flex: 1 },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: variables.spacings.M,
    marginHorizontal: variables.spacings.M
  },
  phoneNumber: {
    height: 15,
    width: 120,
    borderRadius: 4
  },
  date: {
    height: 15,
    width: 60,
    borderRadius: 4
  },
  petInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: variables.spacings.S
  },
  infoComponent: {
    height: 60,
    width: 50
  },
  componentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90
  },
  type: {
    height: 10,
    width: 50,
    borderRadius: 2
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  value: {
    height: 8,
    width: 40,
    borderRadius: 2
  },
  additionalContainer: {
    width: '100%',
    marginTop: variables.spacings.M
  },
  title: {
    height: 20,
    width: 150,
    borderRadius: 4,
    marginLeft: variables.spacings.M
  },
  firstLine: {
    height: 10,
    width: 300,
    borderRadius: 2,
    marginTop: variables.spacings.XS,
    marginLeft: variables.spacings.M
  },
  secondLine: {
    height: 10,
    width: 200,
    borderRadius: 2,
    marginTop: variables.spacings.XS,
    marginLeft: variables.spacings.M
  },
  thirdLine: {
    height: 10,
    width: 100,
    borderRadius: 2,
    marginTop: variables.spacings.XS,
    marginLeft: variables.spacings.M
  }
});
