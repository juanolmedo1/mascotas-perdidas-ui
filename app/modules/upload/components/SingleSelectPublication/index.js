import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { LABELS } from '@upload/components/SingleSelectPublication/constants';
import PUBLICATION_ENTITY from '@entities/Publication';
import PublicationType from '@core/components/PublicationType';
import styles from '@upload/components/SingleSelectPublication/styles';
import variables from '@styles/variables';

const SingleSelectPublication = ({ publicationType, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.lost}
            updateSelection={onSelect}
            active={publicationType === PUBLICATION_ENTITY.types.lost}
            primaryColor={variables.colors.backgroundRed}
          />
          <Text style={styles.subtitle}>{LABELS.types.lost}</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.found}
            updateSelection={onSelect}
            active={publicationType === PUBLICATION_ENTITY.types.found}
            primaryColor={variables.colors.backgroundGreen}
          />
          <Text style={styles.subtitle}>{LABELS.types.found}</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.adoption}
            updateSelection={onSelect}
            active={publicationType === PUBLICATION_ENTITY.types.adoption}
            primaryColor={variables.colors.backgroundBlue}
          />
          <Text style={styles.subtitle}>{LABELS.types.adoption}</Text>
        </View>
      </View>
    </View>
  );
};

SingleSelectPublication.propTypes = {
  publicationType: PropTypes.oneOf([...Object.values(PUBLICATION_ENTITY.types)])
    .isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SingleSelectPublication;
