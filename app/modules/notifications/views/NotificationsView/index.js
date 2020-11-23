import {
  ImageBackground,
  Text,
  View,
  FlatList,
  RefreshControl
} from 'react-native';
import React from 'react';

import { backgroundStyles, imageStyles } from '@styles/background';
import { LABELS } from '@notifications/views/NotificationsView/constants';
import Divider from '@app/modules/core/components/Divider';
import patternBackground from '@app/assets/background/patternBackground.jpeg';
import styles from '@notifications/views/NotificationsView/styles';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  setNewNotificationState
} from '@notifications/store/actions';
import NotificationItem from '@notifications/components/NotificationItem';
import NOTIFICATION_ENITITY from '@entities/Notification';
import NavigationService from '@core/utils/navigation';
import { getLoggedUserId } from '@app/modules/login/store/selectors';
import NotificationsLoadingView from '../NotificationsLoadingView';

const NotificationsView = ({
  notifications,
  getNotifications,
  userId,
  setNewNotification
}) => {
  const onRefresh = () => {
    getNotifications(userId);
    setNewNotification(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      getNotifications(userId);
      setNewNotification(false);
    }, [getNotifications, userId, setNewNotification])
  );

  const selectOnPressHandler = (
    notificationId,
    notificationType,
    publicationId,
    photos
  ) => {
    const { types } = NOTIFICATION_ENITITY;
    switch (notificationType) {
      case types.DELETED_FOR_COMPLAINTS:
        return () =>
          NavigationService.navigate('DeletedPublication', { photos });
      case types.DOBLE_CONFIRMATION:
        return () =>
          NavigationService.navigate('DobleConfirmation', {
            confirmUserPublicationId: publicationId[0],
            notificationUserPublicationId: publicationId[1],
            notificationId: notificationId
          });
      case types.POSSIBLE_MATCHING:
        return () =>
          NavigationService.navigate('Publication', { id: publicationId[0] });
      case types.TEMPORAL_PUBLICATION:
        return () =>
          NavigationService.navigate('TemporalPublication', {
            id: publicationId[0]
          });
    }
  };

  const renderNotificationsSkeletonView = () => <NotificationsLoadingView />;
  const renderEmptyList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.noNotifications}>{LABELS.no_notifications}</Text>
    </View>
  );
  const renderNotificationsList = (data, inProgress) => (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={data}
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl refreshing={inProgress} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <NotificationItem
          photo={item.photos[0]}
          type={item.type}
          username={item.userCreator && item.userCreator.username}
          userPhoto={item.userCreator && item.userCreator.profilePicture.data}
          onPress={selectOnPressHandler(
            item.id,
            item.type,
            item.publicationId,
            item.photos
          )}
          createdAt={item.createdAt}
        />
      )}
    />
  );

  const renderContent = () => {
    const { userNotifications, requestNotificationsInProgress } = notifications;
    return !userNotifications
      ? renderNotificationsSkeletonView()
      : userNotifications.length
      ? renderNotificationsList(
          userNotifications,
          requestNotificationsInProgress
        )
      : renderEmptyList();
  };

  return (
    <ImageBackground
      imageStyle={imageStyles}
      source={patternBackground}
      style={backgroundStyles}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{LABELS.title}</Text>
        </View>
        <Divider />
        <View style={styles.content}>{renderContent()}</View>
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = {
  getNotifications: fetchNotifications,
  setNewNotification: setNewNotificationState
};

const mapStateToProps = state => ({
  notifications: state.notifications,
  userId: getLoggedUserId(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsView);
