import { Modal, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@core/components/DialogSimple/styles';

const DialogSimple = ({ toggleDialog, open = false, children }) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.modalScreen}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
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
          </View>
        </View>
      </Modal>
    </View>
  );
};

DialogSimple.propTypes = {
  open: PropTypes.bool.isRequired
};

export default DialogSimple;
