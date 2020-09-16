import { View } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@core/components/Button';

const BasicInformationView = () => {
  return (
    <View>
      <Button type="primary" rightArrow text="Continuar" onPress={() => {}} />
    </View>
  );
};

BasicInformationView.propTypes = {
  fetchLoginFunc: PropTypes.func.isRequired,
  session: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    profileInfo: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInformationView);
