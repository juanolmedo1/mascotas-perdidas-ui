import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@core/components/DialogSimple/styles';
import Modal from 'react-native-modal';

const DialogSimple = ({ toggleDialog, open = false, children, ...props }) => {
  return (
    <Modal
      isVisible={open}
      backdropOpacity={0.8}
      animationIn="zoomIn"
      animationOut="zoomOut"
      useNativeDriver={true}
      style={styles.modal}
      {...props}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>{children}</View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.closeButton}
            onPress={toggleDialog}
          >
            <Text style={styles.closeText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

DialogSimple.propTypes = {
  open: PropTypes.bool.isRequired
};

export default DialogSimple;
