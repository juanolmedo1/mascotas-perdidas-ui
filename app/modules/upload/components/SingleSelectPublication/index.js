import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/SingleSelectPublication/styles';
import PublicationType from '@core/components/PublicationType';
import variables from '@styles/variables';

const SingleSelectPublication = () => {
  const [selectedPublication, setSelectedPublication] = useState();

  const updateSelection = type => {
    setSelectedPublication(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de Publicación</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PublicationType
            type="LOST"
            updateSelection={updateSelection}
            active={selectedPublication === 'LOST'}
            primaryColor={variables.colors.backgroundRed}
          />
          <Text style={styles.subtitle}>Perdidos</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type="FOUND"
            updateSelection={updateSelection}
            active={selectedPublication === 'FOUND'}
            primaryColor={variables.colors.backgroundGreen}
          />
          <Text style={styles.subtitle}>Encontrados</Text>
        </View>
        <View style={styles.block}>
          <PublicationType
            type="ADOPTION"
            updateSelection={updateSelection}
            active={selectedPublication === 'ADOPTION'}
            primaryColor={variables.colors.backgroundBlue}
          />
          <Text style={styles.subtitle}>Adopción</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleSelectPublication;
