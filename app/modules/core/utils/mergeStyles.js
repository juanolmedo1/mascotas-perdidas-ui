import { isArray } from 'lodash';

export default function(styles, additionalStyles) {
  let applicableStyles = isArray(styles) ? styles : [styles];

  if (additionalStyles) {
    if (isArray(additionalStyles)) {
      applicableStyles = applicableStyles.concat(additionalStyles);
    } else {
      applicableStyles.push(additionalStyles);
    }
  }

  return applicableStyles;
}
