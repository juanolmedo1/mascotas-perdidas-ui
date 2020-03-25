import { connect } from 'react-redux';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationView/constants';
import {
  setHasToRefreshHome,
  setHasToRefreshProfile
} from '@core/store/refreshments/actions';
import DateUtils from '@core/utils/date';
import DialogConfirmBox from '@core/components/DialogConfirmBox';
import DialogSimple from '@core/components/DialogSimple';
import Divider from '@core/components/Divider';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PET_ENTITY from '@entities/Pet';
import PetGenderIcon from '@core/components/PetGenderIcon';
import PetHasCollarIcon from '@core/components/PetHasCollarIcon';
import PetHasRewardIcon from '@core/components/PetHasRewardIcon';
import PetSizeIcon from '@core/components/PetSizeIcon';
import PUBLICATION_ENTITY from '@entities/Publication';
import PublicationHeader from '@core/components/PublicationHeader';
import styles from '@core/views/PublicationView/styles';
import variables from '@app/styles/variables';

const PublicationView = ({
  clearPublication,
  currentPublication,
  deletePublication,
  getPublication,
  reportPublication,
  refreshHome,
  refreshProfile,
  route,
  session
}) => {
  const { id } = route.params;

  const {
    deletedPublication,
    deleteRequestInProgress,
    deleteRequestFailed,
    requestInProgress,
    reportedPublication,
    reportRequestInProgress,
    reportRequestFailed,
    data
  } = currentPublication;

  useEffect(() => {
    getPublication(id);
    return () => {
      clearPublication();
    };
  }, [clearPublication, getPublication, id]);

  useEffect(() => {
    setShowDeletedDialog(deletedPublication);
    setShowReportedDialog(reportedPublication);
  }, [deletedPublication, reportedPublication]);

  let content = null;

  if (requestInProgress || deleteRequestInProgress || reportRequestInProgress) {
    content = <LoadingView />;
  } else {
    if (data) {
      const { reward, type, additionalInfo, createdAt, phoneNumber } = data;
      const { collar, photos, size, gender } = data.pet;
      const { username, profilePicture } = data.creator;

      content = (
        <View>
          <PublicationHeader
            type={type}
            profileImage={profilePicture}
            username={username}
          />
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.carousel}
          >
            {photos.map(photo => (
              <Image
                key={photo.data}
                style={styles.image}
                source={{ uri: `data:${photo.type};base64,${photo.data}` }}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
          <Divider />
          <View style={styles.block}>
            <View style={styles.phoneNumberContainer}>
              <IconSimple
                name="phone"
                size={20}
                color={variables.colors.backgroundBlue}
              />
              <Text style={styles.phone}>{phoneNumber}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{DateUtils.formatDate(createdAt)}</Text>
            </View>
          </View>
          <Divider />
          <View style={styles.iconsContainer}>
            {data.pet.type !== PET_ENTITY.types.cat && (
              <PetSizeIcon size={size} />
            )}
            <PetGenderIcon type={gender} />
            {type !== PUBLICATION_ENTITY.types.adoption && (
              <PetHasCollarIcon hasCollar={collar} />
            )}
            {reward && <PetHasRewardIcon />}
          </View>

          {Boolean(additionalInfo) && (
            <View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.infoTitle}>
                  {LABELS.additionalInformation}
                </Text>
                <View style={styles.divider} />
                <Text style={styles.text}>{additionalInfo}</Text>
              </View>
            </View>
          )}
        </View>
      );
    }
  }

  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);
  const [showReportConfirmDialog, setShowReportConfirmDialog] = useState(false);
  const [showDeletedDialog, setShowDeletedDialog] = useState(
    deletedPublication
  );
  const [showReportedDialog, setShowReportedDialog] = useState(
    reportedPublication
  );

  const onDeletePublication = () => {
    toggleDeleteConfirmDialog(false);
    deletePublication(id);
  };

  const onReportPublication = () => {
    toggleReportConfirmDialog(false);
    reportPublication(id);
  };

  const toggleDeleteConfirmDialog = toggle => {
    setShowDeleteConfirmDialog(toggle);
  };

  const toggleReportConfirmDialog = toggle => {
    setShowReportConfirmDialog(toggle);
  };

  const onDeletedPublication = () => {
    setShowDeletedDialog(false);
    if (!deleteRequestFailed) {
      refreshHome(true);
      refreshProfile(true);
      NavigationService.goBack();
    }
  };

  const onReportedPublication = () => {
    setShowReportedDialog(false);
  };

  const renderPublicationOption = () => {
    if (data && session) {
      const publicationCreator = data.creator.id;
      const loggedUser = session.profileInfo.id;
      const isPublicationOwner = publicationCreator === loggedUser;
      return (
        <TouchableOpacity
          style={styles.extraActionContainer}
          onPress={
            isPublicationOwner
              ? () => toggleDeleteConfirmDialog(true)
              : () => toggleReportConfirmDialog(true)
          }
        >
          <IconSimple
            name={isPublicationOwner ? 'trash' : 'exclamation'}
            size={20}
            color={
              isPublicationOwner
                ? variables.colors.backgroundBlack
                : variables.colors.backgroundRed
            }
          />
        </TouchableOpacity>
      );
    }
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backContainer}
            onPress={() => NavigationService.goBack()}
          >
            <IconIon
              name="md-arrow-back"
              size={25}
              color={variables.colors.backgroundBlack}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{LABELS.title}</Text>
          {renderPublicationOption()}
        </View>
        {content}
        <DialogConfirmBox
          open={showDeleteConfirmDialog}
          onCancel={() => toggleDeleteConfirmDialog(false)}
          onConfirm={onDeletePublication}
          modalText={LABELS.dialogs.delete.dialogText}
          confirmText={LABELS.dialogs.delete.confirmText}
          cancelText={LABELS.dialogs.delete.cancelText}
        />
        <DialogConfirmBox
          open={showReportConfirmDialog}
          onCancel={() => toggleReportConfirmDialog(false)}
          onConfirm={onReportPublication}
          modalText={LABELS.dialogs.report.dialogText}
          confirmText={LABELS.dialogs.report.confirmText}
          cancelText={LABELS.dialogs.report.cancelText}
        />
        <DialogSimple
          open={showDeletedDialog}
          toggleDialog={onDeletedPublication}
        >
          <View>
            <Text style={styles.dialogText}>
              {deleteRequestFailed
                ? LABELS.dialogs.deleted.fail
                : LABELS.dialogs.deleted.success}
            </Text>
          </View>
        </DialogSimple>
        <DialogSimple
          open={showReportedDialog}
          toggleDialog={onReportedPublication}
        >
          <View>
            <Text style={styles.dialogText}>
              {reportRequestFailed
                ? LABELS.dialogs.reported.fail
                : LABELS.dialogs.reported.success}
            </Text>
          </View>
        </DialogSimple>
      </ScrollView>
    </ImageBackground>
  );
};

PublicationView.propTypes = {
  clearPublication: PropTypes.func.isRequired,
  deletePublication: PropTypes.func.isRequired,
  getPublication: PropTypes.func.isRequired,
  reportPublication: PropTypes.func.isRequired,
  currentPublication: PropTypes.shape({
    requestInProgress: PropTypes.bool,
    requestFailed: PropTypes.bool,
    data: PropTypes.object
  }).isRequired
};

const mapDispatchToProps = {
  clearPublication: currentPublicationActions.clearCurrentPublication,
  deletePublication: id => currentPublicationActions.deletePublication(id),
  getPublication: currentPublicationActions.fetchPublication,
  reportPublication: id => currentPublicationActions.reportPublication(id),
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue),
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue)
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationView);
