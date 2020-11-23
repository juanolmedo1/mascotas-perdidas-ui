import { connect } from 'react-redux';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import React, { useEffect } from 'react';

import * as notificationActions from '@notifications/store/actions';
import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@notifications/views/DobleConfirmation/constants';
import Button from '@core/components/Button';
import DialogSimple from '@core/components/DialogSimple';
import Divider from '@app/modules/core/components/Divider';
import IconIon from 'react-native-vector-icons/Ionicons';
import LoadingView from '@core/views/LoadingView';
import NavigationService from '@core/utils/navigation';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import PublicationCard from '@core/components/PublicationCard';
import PUBLICATION_ENTITY from '@entities/Publication';
import styles from '@notifications/views/DobleConfirmation/styles';
import variables from '@app/styles/variables';

const DobleConfirmation = ({
  deleteNotification,
  getConfirmUserPublication,
  getNotificationUserPublication,
  notifications,
  route,
  updatePublications
}) => {
  const {
    notificationId,
    confirmUserPublicationId,
    notificationUserPublicationId
  } = route.params;

  const {
    confirmUserPublication,
    confirmUserPublicationRequestInProgress,
    confirmUserPublicationFailed,
    deletedNotification,
    deleteNotificationRequestInProgress,
    deleteNotificationFailed,
    notificationUserPublication,
    notificationUserPublicationRequestInProgress,
    notificationUserPublicationFailed,
    updatePublicationsFailed
  } = notifications;

  useEffect(() => {
    getConfirmUserPublication(confirmUserPublicationId);
    getNotificationUserPublication(notificationUserPublicationId);
  }, [
    confirmUserPublicationId,
    getConfirmUserPublication,
    getNotificationUserPublication,
    notificationUserPublicationId
  ]);

  const onConfirmHandler = () => {
    const lostPublication =
      notificationUserPublication.type === PUBLICATION_ENTITY.types.lost
        ? notificationUserPublication
        : confirmUserPublication;
    const foundPublication =
      notificationUserPublication.type === PUBLICATION_ENTITY.types.found
        ? notificationUserPublication
        : confirmUserPublication;
    const updateValues = {
      notificationId: notificationId,
      lostPublicationId: lostPublication.id,
      confirmPublicationId: confirmUserPublication.id,
      lastLatitude: foundPublication.ubication.firstLatitude,
      lastLongitude: foundPublication.ubication.firstLongitude,
      isActive: false
    };
    updatePublications(updateValues);
  };

  const onRejectHandler = () => {
    deleteNotification(notificationId);
  };

  const renderContent = () => {
    const requestInProgress =
      confirmUserPublicationRequestInProgress ||
      notificationUserPublicationRequestInProgress ||
      deleteNotificationRequestInProgress;
    if (requestInProgress) {
      return <LoadingView />;
    }
    if (confirmUserPublication && notificationUserPublication) {
      return (
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            <PublicationCard
              key={notificationUserPublication.id}
              id={notificationUserPublication.id}
              date={notificationUserPublication.createdAt}
              type={notificationUserPublication.type}
              username={notificationUserPublication.creator.username}
              profileImage={
                notificationUserPublication.creator.profilePicture.data
              }
              imageShown={notificationUserPublication.pet.photos[0].data}
            />
            <View style={styles.arrowsContainer}>
              <IconAnt
                name="arrowright"
                size={20}
                color={variables.colors.textOrange}
              />
              <IconAnt
                name="arrowleft"
                size={20}
                color={variables.colors.textOrange}
              />
            </View>
            <PublicationCard
              key={confirmUserPublication.id}
              id={confirmUserPublication.id}
              date={confirmUserPublication.createdAt}
              type={confirmUserPublication.type}
              username={confirmUserPublication.creator.username}
              profileImage={confirmUserPublication.creator.profilePicture.data}
              imageShown={confirmUserPublication.pet.photos[0].data}
            />
          </View>
          <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationText}>
              {LABELS.confirmationText(
                notificationUserPublication.type,
                notificationUserPublication.creator.firstName,
                notificationUserPublication.creator.lastName,
                notificationUserPublication.creator.username
              )}
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button
                text={LABELS.buttons.confirm}
                onPress={onConfirmHandler}
                type="primary"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={LABELS.buttons.reject}
                onPress={onRejectHandler}
                type="tertiary"
              />
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={imageStyles}
        source={patternBackground}
        style={backgroundStyles}
      >
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
        </View>
        <Divider />
        {renderContent()}
        <DialogSimple
          open={
            confirmUserPublicationFailed ||
            notificationUserPublicationFailed ||
            deleteNotificationFailed ||
            updatePublicationsFailed
          }
          toggleDialog={() => NavigationService.goBack()}
          onBackdropPress={() => NavigationService.goBack()}
          onBackButtonPress={() => NavigationService.goBack()}
        >
          <View style={styles.contentContainer}>
            <View style={[styles.iconContainer, styles.iconBorderFail]}>
              <IconAnt
                name={'exclamation'}
                size={50}
                color={variables.colors.backgroundRed}
              />
            </View>
            <Text style={styles.dialogText}>{LABELS.dialogs.fail}</Text>
          </View>
        </DialogSimple>
        <DialogSimple
          open={deletedNotification}
          toggleDialog={() => NavigationService.goBack()}
          onBackdropPress={() => NavigationService.goBack()}
          onBackButtonPress={() => NavigationService.goBack()}
        >
          <View style={styles.contentContainer}>
            <View style={[styles.iconContainer, styles.iconBorderSuccess]}>
              <IconAnt
                name={'check'}
                size={50}
                color={variables.colors.backgroundGreen}
              />
            </View>
            <Text style={styles.dialogText}>{LABELS.dialogs.success}</Text>
          </View>
        </DialogSimple>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = {
  deleteNotification: notificationActions.deleteNotificationRequest,
  getConfirmUserPublication: notificationActions.getConfirmUserPublication,
  getNotificationUserPublication:
    notificationActions.getNotificationUserPublication,
  updatePublications: notificationActions.updatePublications
};

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(DobleConfirmation);
