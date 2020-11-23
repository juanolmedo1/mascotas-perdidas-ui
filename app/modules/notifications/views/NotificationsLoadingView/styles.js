import { StyleSheet } from 'react-native';
import variables from '@styles/variables';

export default StyleSheet.create({
  content: {
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: variables.spacings.XS,
    marginTop: variables.spacings.M
  },
  userImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: variables.spacings.XS
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  informationContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    height: 16,
    width: 100,
    borderRadius: 4
  },
  description: {
    flex: 1,
    width: 170,
    borderRadius: 4,
    marginTop: variables.spacings.XS
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: variables.spacings.XS
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 4
  },
  creationDate: {
    height: 16,
    width: 25,
    borderRadius: 4
  }
});
