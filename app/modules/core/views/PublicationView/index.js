import { connect } from 'react-redux';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import * as currentPublicationActions from '@core/store/currentPublication/actions';
import {
  addFavoritePublication,
  deleteFavoritePublication
} from '@likes/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@core/views/PublicationView/constants';
import {
  setHasToRefreshFavorites,
  setHasToRefreshHome,
  setHasToRefreshProfile
} from '@core/store/refreshments/actions';
import DateUtils from '@core/utils/date';
import DialogConfirmBox from '@core/components/DialogConfirmBox';
import DialogSimple from '@core/components/DialogSimple';
import Divider from '@core/components/Divider';
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
import IconAnt from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

const PublicationView = ({
  clearPublication,
  currentPublication,
  deletePublication,
  favPublication,
  favorites,
  getPublication,
  reportPublication,
  refreshFavorites,
  refreshHome,
  refreshProfile,
  route,
  session,
  unfavPublication
}) => {
  const { id } = route.params;

  const {
    deletedPublication,
    deleteRequestFailed,
    requestInProgress,
    reportedPublication,
    reportRequestFailed,
    data
  } = currentPublication;

  const { favoritesPublications, requestFavoritesInProgress } = favorites;

  const publicationCreatorId = data && data.creator ? data.creator.id : null;
  const loggedUserId = session.profileInfo.id;
  const isPublicationOwner = publicationCreatorId === loggedUserId;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getPublication(id);
    }
    return () => {
      clearPublication();
      isMounted = false;
    };
  }, [clearPublication, getPublication, id]);

  useFocusEffect(
    React.useCallback(() => {
      clearPublication();
      getPublication(id);
    }, [clearPublication, getPublication, id])
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setShowDeletedDialog(deletedPublication);
      setShowReportedDialog(reportedPublication);
    }
    return () => {
      isMounted = false;
    };
  }, [deletedPublication, reportedPublication]);

  const checkUserFavorite = () => {
    return favoritesPublications.findIndex(favorite => favorite.id === id) > -1;
  };
  const [isUserFavorite, setIsUserFavorite] = useState(checkUserFavorite());

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

  const onUnfavPublication = (userId, publicationId) => {
    unfavPublication({ userId: userId, publicationId: publicationId });
    setIsUserFavorite(false);
    refreshFavorites(true);
  };

  const onFavPublication = (userId, publicationId) => {
    favPublication({ userId: userId, publicationId: publicationId });
    setIsUserFavorite(true);
    refreshFavorites(true);
  };

  const onPressDeleteHandler = () => {
    toggleModal();
    toggleDeleteConfirmDialog(true);
  };

  const onPressSimilarPublicationsHandler = () => {
    toggleModal();
    NavigationService.navigate('SimilarPublicationsNavigator', {
      screen: 'SimilarPublications',
      params: { id: id }
    });
  };

  const onPressHeatmapHandler = () => {
    toggleModal();
    const { type } = data.pet;
    const { firstLatitude, firstLongitude } = data.ubication;
    NavigationService.navigate('HeatmapPublications', {
      id: id,
      publicationLatitude: firstLatitude,
      publicationLongitude: firstLongitude,
      petType: type
    });
  };

  const renderOwnerActions = () => {
    const renderHeatMapOption = data.type === PUBLICATION_ENTITY.types.lost;
    const renderSimilarPublicationOption =
      data.type !== PUBLICATION_ENTITY.types.adoption;
    return (
      <View style={styles.extraActionContainer}>
        <TouchableOpacity
          style={styles.headerIconContainer}
          activeOpacity={0.9}
          onPress={toggleModal}
        >
          <IconSimple
            name="options"
            size={20}
            color={variables.colors.backgroundBlack}
          />
        </TouchableOpacity>
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={0.8}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={toggleModal}
          useNativeDriver={true}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalButtonContainer}
              activeOpacity={0.9}
              onPress={onPressDeleteHandler}
            >
              <Text style={styles.modalDeleteText}>{LABELS.modal.delete}</Text>
            </TouchableOpacity>
            {renderSimilarPublicationOption && (
              <>
                <View style={styles.modalDivider} />
                <TouchableOpacity
                  style={styles.modalButtonContainer}
                  activeOpacity={0.9}
                  onPress={onPressSimilarPublicationsHandler}
                >
                  <Text style={styles.modalText}>
                    {LABELS.modal.similarPublications}
                  </Text>
                </TouchableOpacity>
              </>
            )}
            {renderHeatMapOption && (
              <>
                <View style={styles.modalDivider} />
                <TouchableOpacity
                  style={styles.modalButtonContainer}
                  activeOpacity={0.9}
                  onPress={onPressHeatmapHandler}
                >
                  <Text style={styles.modalText}>{LABELS.modal.heatMap}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <TouchableOpacity
            style={styles.modalCancelButton}
            activeOpacity={0.9}
            onPress={toggleModal}
          >
            <Text style={styles.modalText}>{LABELS.modal.cancel}</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };

  const renderNotOwnerActions = () => {
    const iconName = isUserFavorite ? 'star' : 'star-o';
    const onPressAction = isUserFavorite
      ? () => onUnfavPublication(loggedUserId, id)
      : () => onFavPublication(loggedUserId, id);
    return (
      <View style={styles.extraActionContainer}>
        <TouchableOpacity
          style={styles.headerIconContainer}
          onPress={onPressAction}
        >
          <IconFontAwesome
            name={iconName}
            size={25}
            color={variables.colors.backgroundOrange}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerIconContainer}
          onPress={() => toggleReportConfirmDialog(true)}
        >
          <IconSimple
            name={'exclamation'}
            size={23}
            color={variables.colors.backgroundDarkGrey}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderPublicationActions = () => {
    return isPublicationOwner ? renderOwnerActions() : renderNotOwnerActions();
  };

  let content = null;

  if (requestInProgress || !data) {
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
                source={{ uri: photo.data }}
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
            {data.pet.type === PET_ENTITY.types.dog && (
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
          {requestInProgress ? null : renderPublicationActions()}
        </View>
        {content}
        <DialogConfirmBox
          open={showDeleteConfirmDialog}
          onCancel={() => toggleDeleteConfirmDialog(false)}
          onConfirm={onDeletePublication}
          onBackdropPress={() => toggleDeleteConfirmDialog(false)}
          onBackButtonPress={() => toggleDeleteConfirmDialog(false)}
          title={LABELS.dialogs.delete.title}
          modalText={LABELS.dialogs.delete.dialogText}
          confirmText={LABELS.dialogs.delete.confirmText}
          cancelText={LABELS.dialogs.delete.cancelText}
        />
        <DialogConfirmBox
          open={showReportConfirmDialog}
          onCancel={() => toggleReportConfirmDialog(false)}
          onConfirm={onReportPublication}
          onBackdropPress={() => toggleReportConfirmDialog(false)}
          onBackButtonPress={() => toggleReportConfirmDialog(false)}
          title={LABELS.dialogs.report.title}
          modalText={LABELS.dialogs.report.dialogText}
          confirmText={LABELS.dialogs.report.confirmText}
          cancelText={LABELS.dialogs.report.cancelText}
        />
        <DialogSimple
          open={showDeletedDialog}
          toggleDialog={onDeletedPublication}
          onBackdropPress={onDeletedPublication}
          onBackButtonPress={onDeletedPublication}
        >
          <View style={styles.contentContainer}>
            <View
              style={[
                styles.iconContainer,
                deleteRequestFailed
                  ? styles.iconBorderFail
                  : styles.iconBorderSuccess
              ]}
            >
              <IconAnt
                name={deleteRequestFailed ? 'exclamation' : 'check'}
                size={50}
                color={
                  deleteRequestFailed
                    ? variables.colors.backgroundRed
                    : variables.colors.backgroundGreen
                }
              />
            </View>
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
          onBackdropPress={onReportedPublication}
          onBackButtonPress={onReportedPublication}
        >
          <View style={styles.contentContainer}>
            <View
              style={[
                styles.iconContainer,
                reportRequestFailed
                  ? styles.iconBorderFail
                  : styles.iconBorderSuccess
              ]}
            >
              <IconAnt
                name={reportRequestFailed ? 'exclamation' : 'check'}
                size={50}
                color={
                  reportRequestFailed
                    ? variables.colors.backgroundRed
                    : variables.colors.backgroundGreen
                }
              />
            </View>
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
  favPublication: ({ userId, publicationId }) =>
    addFavoritePublication({ userId, publicationId }),
  getPublication: currentPublicationActions.fetchPublication,
  reportPublication: id => currentPublicationActions.reportPublication(id),
  refreshFavorites: refreshValue => setHasToRefreshFavorites(refreshValue),
  refreshHome: refreshValue => setHasToRefreshHome(refreshValue),
  refreshProfile: refreshValue => setHasToRefreshProfile(refreshValue),
  unfavPublication: ({ userId, publicationId }) =>
    deleteFavoritePublication({ userId, publicationId })
};

const mapStateToProps = state => ({
  currentPublication: state.currentPublication,
  favorites: state.favorites,
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationView);
