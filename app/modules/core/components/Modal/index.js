import { Modal, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '@core/components/Modal/styles';

const ModalComponent = ({
  cancelText,
  confirmText,
  onCancel = null,
  onConfirm = null,
  open = false,
  modalText
}) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.modalScreen}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View style={styles.mainTextContainer}>
                <Text style={styles.mainText}>{modalText}</Text>
              </View>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.option}
                  onPress={onCancel}
                >
                  <Text style={styles.optionText}>{cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.option}
                  onPress={onConfirm}
                >
                  <Text style={styles.optionText}>{confirmText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

ModalComponent.propTypes = {
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modalText: PropTypes.string.isRequired
};

export default ModalComponent;
