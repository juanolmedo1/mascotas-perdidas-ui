import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/SingleSelectPet/styles';
import PetIcon from '@core/components/PetIcon';

const SingleSelectPet = () => {
  const [selectedPet, setSelectedPet] = useState();

  const updateSelection = type => {
    setSelectedPet(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mascota</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetIcon
            type="DOG"
            updateSelection={updateSelection}
            active={selectedPet === 'DOG'}
          />
          <Text style={styles.subtitle}>Perro</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type="CAT"
            updateSelection={updateSelection}
            active={selectedPet === 'CAT'}
          />
          <Text style={styles.subtitle}>Gato</Text>
        </View>
        <View style={styles.block}>
          <PetIcon
            type="OTHER"
            updateSelection={updateSelection}
            active={selectedPet === 'OTHER'}
          />
          <Text style={styles.subtitle}>Otro</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleSelectPet;
