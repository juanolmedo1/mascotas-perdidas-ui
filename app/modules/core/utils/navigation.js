import * as React from 'react';

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

export default {
  goBack,
  navigate,
  reset
};
