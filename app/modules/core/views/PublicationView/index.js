import { connect } from 'react-redux';
import {
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
import UbicationMarker from '@core/components/UbicationMarker';
import ImageSlider from '@core/components/ImageSlider';

const PublicationView = ({
  clearCandidates,
  clearPublication,
  currentPublication,
  deletePublication,
  favPublication,
  favorites,
  getCandidates,
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
    resolvedCandidates,
    resolvedCandidatesRequestInProgress,
    resolvedCandidatesRequestFailed,
    data
  } = currentPublication;

  const { favoritesPublications } = favorites;

  const publicationCreatorId = data && data.creator ? data.creator.id : null;
  const loggedUserId = session.profileInfo.id;
  const isPublicationOwner = publicationCreatorId === loggedUserId;

  const checkUserFavorite = () => {
    return favoritesPublications.findIndex(favorite => favorite.id === id) > -1;
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [isUserFavorite, setIsUserFavorite] = useState(checkUserFavorite());
  const [
    resolvePublicationButtonPressed,
    setResolvePublicationButtonPressed
  ] = useState(false);
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);
  const [showReportConfirmDialog, setShowReportConfirmDialog] = useState(false);
  const [showDeletedDialog, setShowDeletedDialog] = useState(
    deletedPublication
  );
  const [showReportedDialog, setShowReportedDialog] = useState(
    reportedPublication
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setModalVisible(false);
      setResolvePublicationButtonPressed(false);
      getPublication(id);
    }
    return () => {
      setModalVisible(false);
      setResolvePublicationButtonPressed(false);
      clearPublication();
      isMounted = false;
    };
  }, [clearPublication, getPublication, id]);

  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(false);
      setResolvePublicationButtonPressed(false);
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

  useEffect(() => {
    const { publicationsViewed, publicationsNotViewed } =
      resolvedCandidates || {};
    const hasCandidatesToShow =
      (publicationsViewed && publicationsViewed.length > 0) ||
      (publicationsNotViewed && publicationsNotViewed.length > 0);
    //El usuario presionó el botón que encontró a su mascota/encontró a su dueño y terminó la consulta
    if (
      resolvePublicationButtonPressed &&
      !resolvedCandidatesRequestInProgress &&
      !resolvedCandidatesRequestFailed
    ) {
      setModalVisible(false);
      const { type } = data;
      const navigateParams = {
        id: id,
        publicationType: type,
        publicationPhoto: data.pet.photos[0].data
      };
      //Si hay candidatos para mostrar, lo llevamos a la vista donde puede seleccionar alguna publicación similar
      if (hasCandidatesToShow) {
        NavigationService.navigate('PublicationResolvedNavigator', {
          screen: 'PublicationResolved',
          params: navigateParams
        });
      } else {
        //No tiene candidatos para mostrar, entonces hay que diferenciar si es publicación de mascota perdida o encontrada
        const isLostPublication = data.type === PUBLICATION_ENTITY.types.lost;
        if (isLostPublication) {
          //Si es de mascota perdida, al no tener candidatos para mostrar, lo llevamos a la vista de mapa
          NavigationService.navigate('PublicationResolvedNavigator', {
            screen: 'PublicationResolved_Map',
            params: navigateParams
          });
        } else {
          //Si es de mascota encontrada, al no tener candidatos para mostrar, directamente actualizamos y vamos a la vista de respuesta
          NavigationService.navigate('PublicationResolvedNavigator', {
            screen: 'PublicationResolved_Response',
            params: navigateParams
          });
        }
      }
    }
  }, [
    data,
    id,
    resolvePublicationButtonPressed,
    resolvedCandidates,
    resolvedCandidatesRequestFailed,
    resolvedCandidatesRequestInProgress
  ]);

  const onDeletePublication = () => {
    toggleDeleteConfirmDialog(false);
    deletePublication(id);
  };

  const onReportPublication = () => {
    toggleReportConfirmDialog(false);
    reportPublication({ id, userId: loggedUserId });
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

  const onPressResolvePublicationHandler = () => {
    clearCandidates();
    getCandidates(id);
    setResolvePublicationButtonPressed(true);
  };

  const onPressResolveAdoptionPublicationHandler = () => {
    setResolvePublicationButtonPressed(true);
    setModalVisible(false);
    const navigateParams = {
      id: id,
      publicationType: data.type,
      publicationPhoto: data.pet.photos[0].data
    };
    NavigationService.navigate('PublicationResolvedNavigator', {
      screen: 'PublicationResolved_Response',
      params: navigateParams
    });
  };

  const renderOwnerActions = () => {
    const isLostPublication = data.type === PUBLICATION_ENTITY.types.lost;
    const isFoundedPublication = data.type === PUBLICATION_ENTITY.types.found;
    const isAdoptionPublication =
      data.type === PUBLICATION_ENTITY.types.adoption;
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
            {!isAdoptionPublication && (
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
            {isLostPublication && (
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
            {isLostPublication ? (
              <>
                <View style={styles.modalDivider} />
                <TouchableOpacity
                  style={styles.modalButtonContainer}
                  activeOpacity={0.9}
                  onPress={onPressResolvePublicationHandler}
                >
                  {resolvePublicationButtonPressed ? (
                    <LoadingView contain={true} />
                  ) : (
                    <Text style={styles.modalText}>
                      {LABELS.modal.foundedPet}
                    </Text>
                  )}
                </TouchableOpacity>
              </>
            ) : null}
            {isFoundedPublication ? (
              <>
                <View style={styles.modalDivider} />
                <TouchableOpacity
                  style={styles.modalButtonContainer}
                  activeOpacity={0.9}
                  onPress={onPressResolvePublicationHandler}
                >
                  {resolvePublicationButtonPressed ? (
                    <LoadingView contain={true} />
                  ) : (
                    <Text style={styles.modalText}>
                      {LABELS.modal.foundedOwner}
                    </Text>
                  )}
                </TouchableOpacity>
              </>
            ) : null}
            {isAdoptionPublication ? (
              <>
                <View style={styles.modalDivider} />
                <TouchableOpacity
                  style={styles.modalButtonContainer}
                  activeOpacity={0.9}
                  onPress={onPressResolveAdoptionPublicationHandler}
                >
                  {resolvePublicationButtonPressed ? (
                    <LoadingView contain={true} />
                  ) : (
                    <Text style={styles.modalText}>
                      {LABELS.modal.foundedHome}
                    </Text>
                  )}
                </TouchableOpacity>
              </>
            ) : null}
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
        {data &&
          ((data.complaints && !data.complaints.includes(loggedUserId)) ||
            !data.complaints) && (
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
          )}
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
      const {
        reward,
        type,
        isActive,
        additionalInfo,
        createdAt,
        phoneNumber
      } = data;
      const { collar, photos, size, gender } = data.pet;
      const { username, profilePicture } = data.creator;

      const photosData = photos.map(photo => photo.data);

      content = (
        <View>
          {!isActive && (
            <View style={styles.inactivePublicationContainer}>
              <Text style={styles.inactivePublicationText}>
                {LABELS.inactive}
              </Text>
            </View>
          )}
          <PublicationHeader
            type={type}
            profileImage={profilePicture}
            username={username}
          />
          <ImageSlider photos={photosData} />
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
                <Text style={styles.subtitle}>
                  {LABELS.additionalInformation}
                </Text>
                <View style={styles.divider} />
                <Text style={styles.text}>{additionalInfo}</Text>
              </View>
            </View>
          )}
          <View style={styles.ubicationTitleContainer}>
            <Text style={styles.subtitle}>{LABELS.ubication}</Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.ubicationContainer}>
            <UbicationMarker
              startLatitude={data.ubication.firstLatitude}
              startLongitude={data.ubication.firstLongitude}
              startLatitudeDelta={0.01}
              startLongitudeDelta={0.01}
            />
          </View>
        </View>
      );
    }
  }
  let publicationActive = true;
  if (data) {
    publicationActive = data.isActive;
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
          {requestInProgress || !publicationActive
            ? null
            : renderPublicationActions()}
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
  clearCandidates: currentPublicationActions.clearCandidates,
  clearPublication: currentPublicationActions.clearCurrentPublication,
  deletePublication: id => currentPublicationActions.deletePublication(id),
  favPublication: ({ userId, publicationId }) =>
    addFavoritePublication({ userId, publicationId }),
  getCandidates: currentPublicationActions.getResolvedCandidates,
  getPublication: currentPublicationActions.fetchPublication,
  reportPublication: data => currentPublicationActions.reportPublication(data),
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
