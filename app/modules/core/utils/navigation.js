import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

function navigate(routeName, params) {
  navigationRef.current.navigate(routeName, params);
}

function reset(index, routeName) {
  navigationRef.current.reset({
    index: index,
    routes: [{ name: routeName }]
  });
}

function goBack() {
  navigationRef.current.goBack();
}

function pop(cantScreens) {
  navigationRef.current.dispatch(StackActions.pop(cantScreens));
}

export default {
  goBack,
  navigate,
  pop,
  reset
};
