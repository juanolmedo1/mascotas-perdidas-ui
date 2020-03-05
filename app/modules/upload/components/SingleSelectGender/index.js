import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from '@upload/components/SingleSelectPublication/styles';
import PetGender from '@core/components/PetGender';

const SingleSelectPublication = () => {
  const [petGender, setPetGender] = useState();

  const updateSelection = type => {
    setPetGender(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Género</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.block}>
          <PetGender
            type="MALE"
            updateSelection={updateSelection}
            active={petGender === 'MALE'}
          />
          <Text style={styles.subtitle}>Macho</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type="FEMALE"
            updateSelection={updateSelection}
            active={petGender === 'FEMALE'}
          />
          <Text style={styles.subtitle}>Hembra</Text>
        </View>
        <View style={styles.block}>
          <PetGender
            type="UNDEFINED"
            updateSelection={updateSelection}
            active={petGender === 'UNDEFINED'}
          />
          <Text style={styles.subtitle}>Sin Identificar</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleSelectPublication;
