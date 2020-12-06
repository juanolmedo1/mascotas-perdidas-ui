import { View, Text } from 'react-native';
import React from 'react';
import styles from '@register/views/ResponseView/styles';
import Button from '@app/modules/core/components/Button';
import Feather from 'react-native-vector-icons/Feather';
import variables from '@styles/variables';
import NavigationService from '@core/utils/navigation';
import { connect } from 'react-redux';
import { clearInformation } from '@register/store/actions';

const ResponseView = ({ clearInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.icon}>
          <Feather
            name="check"
            size={70}
            color={variables.colors.backgroundGreen}
          />
        </View>
        <Text style={styles.title}>¡Has sido registrado!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="secondary"
          onPress={() => {
            NavigationService.navigate('LoginNavigator');
            NavigationService.reset(0, 'LoginNavigator');
            clearInfo();
          }}
          text="Iniciar Sesión"
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  clearInfo: clearInformation
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ResponseView);
