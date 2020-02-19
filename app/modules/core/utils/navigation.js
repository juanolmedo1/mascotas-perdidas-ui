import * as React from 'react';

export const navigationRef = React.createRef();

function navigate(routeName, params) {
  navigationRef.current.navigate(routeName, params);
}

export default {
  navigate
};
