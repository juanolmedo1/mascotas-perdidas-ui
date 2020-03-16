import { connect } from 'react-redux';
import { Text, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as newPublicationActions from '@upload/store/actions';
import { LABELS } from '@upload/views/FiltersView/constants';
import Button from '@core/components/Button';
import SingleSelectGender from '@upload/components/SingleSelectGender';
import SingleSelectPet from '@upload/components/SingleSelectPet';
import SingleSelectPublication from '@upload/components/SingleSelectPublication';
import SingleSelectSize from '@upload/components/SingleSelectSize';
import Reward from '@core/components/Reward';
import AdditionalInformation from '@upload/components/AdditionalInformation';
import PhoneNumber from '@upload/components/PhoneNumber';
import HasCollar from '@upload/components/HasCollar';
import styles from '@upload/views/FiltersView/styles';
import ColorsSelection from '@upload/components/ColorsSelection';
import PET_ENTITY from '@entities/Pet';
import PUBLICATION_ENTITY from '@entities/Publication';

const FiltersView = ({
  createPublication,
  newPublication,
  setPetGender,
  setPetType,
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
  }, [similarPublications]);
  const [reward, setReward] = useState(false);
  const [collar, setCollar] = useState(false);

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
          show={newPublication.petType === PET_ENTITY.types.dog}
        />
      </View>
      <View style={styles.block}>
        <ColorsSelection />
      </View>
      <View style={styles.block}>
        <View style={styles.rewardContainer}>
          <Reward
            updateSelection={setReward}
            active={reward}
            show={
              newPublication.publicationType === PUBLICATION_ENTITY.types.lost
            }
          />
          <HasCollar updateSelection={setCollar} active={collar} />
        </View>
      </View>
      <View style={styles.block}>
        <PhoneNumber />
      </View>
      <View style={styles.block}>
        <AdditionalInformation />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={LABELS.buttons.publish}
          onPress={() => createPublication(newPublicationRest)}
          loading={requestInProgress}
          type="primary"
        />
      </View>
    </ScrollView>
  );
};

FiltersView.propTypes = {
  createPublication: PropTypes.func.isRequired,
  setPetGender: PropTypes.func.isRequired,
  setPetType: PropTypes.func.isRequired,
  setPublicationType: PropTypes.func.isRequired,
  newPublication: PropTypes.shape({
    locationId: PropTypes.string,
    petGender: PropTypes.string,
    petType: PropTypes.string,
    photosArray: PropTypes.arrayOf(PropTypes.string),
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
  setPetGender: petGender => newPublicationActions.setPetGender(petGender),
  setPetType: petType => newPublicationActions.setPetType(petType),
  setPublicationType: publicationType =>
    newPublicationActions.setPublicationType(publicationType)
};

const mapStateToProps = state => ({
  newPublication: state.newPublication
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);
