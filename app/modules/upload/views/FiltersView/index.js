import { connect } from 'react-redux';
import { Text, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import * as newPublicationActions from '@upload/store/actions';
import { LABELS } from '@upload/views/FiltersView/constants';
import AdditionalInformation from '@upload/components/AdditionalInformation';
import Button from '@core/components/Button';
import HasCollar from '@upload/components/HasCollar';
import LoadingView from '@core/views/LoadingView';
import PhoneNumber from '@upload/components/PhoneNumber';
import Reward from '@core/components/Reward';
import SingleSelectGender from '@upload/components/SingleSelectGender';
import SingleSelectPet from '@upload/components/SingleSelectPet';
import SingleSelectPublication from '@upload/components/SingleSelectPublication';
import SingleSelectSize from '@upload/components/SingleSelectSize';
import styles from '@upload/views/FiltersView/styles';

const FiltersView = ({
  createPublication,
  newPublication,
  //setAdditionalInformation,
  setPetCollar,
  setPetGender,
  setPetType,
  setPetSize,
  //setPhoneNumber,
  setPublicationReward,
  setPublicationType
}) => {
  const {
    requestFailed,
    requestInProgress,
    similarPublications,
    ...newPublicationRest
  } = newPublication;

  useEffect(() => {
    console.log('SIMILAR PUBLICATIONS', similarPublications);
  }, [newPublication, similarPublications]);

  const [phoneNumberText, setPhoneNumberText] = useState(
    newPublication.phoneNumber
  );

  const [additionalInformationText, setAdditionalInformationText] = useState(
    newPublication.additionalInformation
  );

  const createNewPublication = () => {
    /*Por ahora lo mandamos con el create publication sin hacer dispatch de ninguna acción
    setPhoneNumber(phoneNumberText);
    setAdditionalInformation(additionalInformationText);
    */
    const newPublicationValues = {
      ...newPublicationRest,
      phoneNumber: phoneNumberText,
      additionalInformation: additionalInformationText
    };
    createPublication(newPublicationValues);
  };

  if (requestInProgress) {
    return <LoadingView />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>{LABELS.title}</Text>
      </View>
      <View style={styles.block}>
        <SingleSelectPet
          petType={newPublication.petType}
          onSelect={setPetType}
        />
      </View>
      <View style={styles.block}>
        <SingleSelectPublication
          publicationType={newPublication.publicationType}
          onSelect={setPublicationType}
        />
      </View>
      <View style={styles.block}>
        <SingleSelectGender
          petGender={newPublication.petGender}
          onSelect={setPetGender}
        />
      </View>
      <View style={styles.block}>
        <SingleSelectSize
          petSize={newPublication.petSize}
          onSelect={setPetSize}
        />
      </View>
      <View style={styles.block}>
        <View style={styles.rewardContainer}>
          <Reward
            hasReward={newPublication.publicationReward}
            onChange={setPublicationReward}
          />
          <HasCollar
            hasCollar={newPublication.petCollar}
            onChange={setPetCollar}
          />
        </View>
      </View>
      <View style={styles.block}>
        <PhoneNumber
          phoneNumber={phoneNumberText}
          onChange={setPhoneNumberText}
        />
      </View>
      <View style={styles.block}>
        <AdditionalInformation
          information={additionalInformationText}
          onChange={setAdditionalInformationText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={LABELS.buttons.publish}
          onPress={createNewPublication}
          type="primary"
        />
      </View>
    </ScrollView>
  );
};

FiltersView.propTypes = {
  createPublication: PropTypes.func.isRequired,
  //setAdditionalInformation: PropTypes.func.isRequired,
  setPetCollar: PropTypes.func.isRequired,
  setPetGender: PropTypes.func.isRequired,
  setPetType: PropTypes.func.isRequired,
  setPetSize: PropTypes.func.isRequired,
  //setPhoneNumber: PropTypes.func.isRequired,
  setPublicationReward: PropTypes.func.isRequired,
  setPublicationType: PropTypes.func.isRequired,
  newPublication: PropTypes.shape({
    additionalInformation: PropTypes.string,
    locationId: PropTypes.string,
    petGender: PropTypes.string,
    petType: PropTypes.string,
    phoneNumber: PropTypes.string,
    photosArray: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.string,
        mime: PropTypes.string,
        path: PropTypes.string
      })
    ),
    provinceId: PropTypes.string,
    publicationType: PropTypes.string,
    userId: PropTypes.string,
    requestFailed: PropTypes.bool,
    requestInProgress: PropTypes.bool,
    similarPublications: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

const mapDispatchToProps = {
  createPublication: newPublication =>
    newPublicationActions.createPublicationRequest(newPublication),
  // setAdditionalInformation: additionalInformation => newPublicationActions.setAdditionalInformation(additionalInformation),
  setPetCollar: hasCollar => newPublicationActions.setPetCollar(hasCollar),
  setPetGender: petGender => newPublicationActions.setPetGender(petGender),
  setPetType: petType => newPublicationActions.setPetType(petType),
  setPetSize: petSize => newPublicationActions.setPetSize(petSize),
  // setPhoneNumber: phoneNumber => newPublicationActions.setPhoneNumber(phoneNumber),
  setPublicationReward: hasReward =>
    newPublicationActions.setPublicationReward(hasReward),
  setPublicationType: publicationType =>
    newPublicationActions.setPublicationType(publicationType)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
