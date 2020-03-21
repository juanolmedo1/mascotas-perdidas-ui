import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { LABELS } from '@core/components/MultipleSelectPublication/constants';
import PUBLICATION_ENTITY from '@entities/Publication';
import PublicationType from '@core/components/PublicationType';
import styles from '@core/components/MultipleSelectPublication/styles';
import variables from '@styles/variables';

const MultipleSelectPublication = ({
  publicationTypes,
  addPublication,
  removePublication
}) => {
  const updateSelection = value => {
    if (publicationTypes.includes(value)) {
      removePublication(value);
    } else {
      addPublication(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{LABELS.title}</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.lost}
            updateSelection={updateSelection}
            active={publicationTypes.includes(PUBLICATION_ENTITY.types.lost)}
            primaryColor={variables.colors.backgroundRed}
          />
          <Text style={styles.subtitle}>{LABELS.types.lost}</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.found}
            updateSelection={updateSelection}
            active={publicationTypes.includes(PUBLICATION_ENTITY.types.found)}
            primaryColor={variables.colors.backgroundGreen}
          />
          <Text style={styles.subtitle}>{LABELS.types.found}</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type={PUBLICATION_ENTITY.types.adoption}
            updateSelection={updateSelection}
            active={publicationTypes.includes(
              PUBLICATION_ENTITY.types.adoption
            )}
            primaryColor={variables.colors.backgroundBlue}
          />
          <Text style={styles.subtitle}>{LABELS.types.adoption}</Text>
        </View>
      </View>
    </View>
  );
};

MultipleSelectPublication.propTypes = {
  publicationTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  addPublication: PropTypes.func.isRequired,
  removePublication: PropTypes.func.isRequired
};

export default MultipleSelectPublication;
