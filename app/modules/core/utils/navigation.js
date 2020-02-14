import {NavigationActions} from 'react-navigation';

class Navigation {
  addListener(event, callback) {
    this.ref.addListener(event, callback);
  }

  setTopLevelNavigator(ref) {
    this.ref = ref;
  }

  navigate(routeName, params) {
    this.ref.dispatch(NavigationActions.navigate({routeName, params}));
  }
}

export default new Navigation();
