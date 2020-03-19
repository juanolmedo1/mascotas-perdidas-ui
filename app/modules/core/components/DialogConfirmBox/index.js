import { Modal, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@core/components/DialogConfirmBox/styles';

const DialogConfirmBox = ({
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
              <View style={styles.content}>
                <Text style={styles.mainText}>{modalText}</Text>
              </View>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.cancelOption}
                  onPress={onCancel}
                >
                  <Text style={styles.cancelText}>{cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.confirmOption}
                  onPress={onConfirm}
                >
                  <Text style={styles.confirmText}>{confirmText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

DialogConfirmBox.propTypes = {
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modalText: PropTypes.string
};

export default DialogConfirmBox;
