import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '@core/components/DialogConfirmBox/styles';
import Modal from 'react-native-modal';

const DialogConfirmBox = ({
  cancelText,
  confirmText,
  onCancel = null,
  onConfirm = null,
  open = false,
  title,
  modalText,
  ...props
}) => {
  return (
    <Modal
      isVisible={open}
      animationIn="zoomIn"
      animationOut="zoomOut"
      backdropOpacity={0.8}
      useNativeDriver={true}
      {...props}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
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
    </Modal>
  );
};

DialogConfirmBox.propTypes = {
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modalText: PropTypes.string,
  title: PropTypes.string
};

export default DialogConfirmBox;
