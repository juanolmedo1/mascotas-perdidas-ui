import { StyleSheet } from 'react-native';
import variables from '@app/styles/variables';

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: variables.spacings.S,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  breedItemContainer: {
    height: 80,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 4
  },
  breed: {
    height: 16,
    width: 80,
    borderRadius: 4
  },
  value: {
    height: 30,
    width: 30,
    borderRadius: 4
  },
  button: {
    height: 60,
    width: '90%',
    borderRadius: 4
  },
  titleContainer: {
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    height: 16,
    width: '80%',
    marginTop: variables.spacings.XXS,
    borderRadius: 2
  },
  titleSmall: {
    height: 16,
    width: '70%',
    marginTop: variables.spacings.XXS,
    marginBottom: variables.spacings.S,
    borderRadius: 2
  },
  subtitle: {
    height: 8,
    width: '70%',
    borderRadius: 2,
    marginTop: variables.spacings.XXS
  }
});
