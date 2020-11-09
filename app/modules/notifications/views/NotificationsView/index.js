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
import LoadingView from '@app/modules/core/views/LoadingView';
import NotificationItem from '@notifications/components/NotificationItem';
import NOTIFICATION_ENITITY from '@entities/Notification';
import NavigationService from '@core/utils/navigation';

const NotificationsView = ({
  notifications,
  getNotifications,
  session,
  setNewNotification
}) => {
  const { id } = session.profileInfo;
  const { userNotifications, requestNotificationsInProgress } = notifications;

  const onRefresh = () => {
    getNotifications(id);
    setNewNotification(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      getNotifications(id);
      setNewNotification(false);
    }, [getNotifications, id, setNewNotification])
  );

  const selectOnPressHandler = (type, publicationId, photos) => {
    if (type === NOTIFICATION_ENITITY.types.DELETED_FOR_COMPLAINTS) {
      return () => NavigationService.navigate('DeletedPublication', { photos });
    }
    return () =>
      NavigationService.navigate('Publication', { id: publicationId });
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
        <View style={styles.content}>
          {requestNotificationsInProgress ? (
            <LoadingView />
          ) : !userNotifications.length ? (
            <View style={styles.emptyList}>
              <Text style={styles.noNotifications}>
                {LABELS.no_notifications}
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              data={userNotifications}
              contentContainerStyle={styles.list}
              refreshControl={
                <RefreshControl
                  refreshing={requestNotificationsInProgress}
                  onRefresh={onRefresh}
                />
              }
              renderItem={({ item }) => (
                <NotificationItem
                  photo={item.photos[0]}
                  publicationId={item.publicationId}
                  type={item.type}
                  username={item.userCreator && item.userCreator.username}
                  userPhoto={
                    item.userCreator && item.userCreator.profilePicture.data
                  }
                  onPress={selectOnPressHandler(
                    item.type,
                    item.publicationId,
                    item.photos
                  )}
                  createdAt={item.createdAt}
                />
              )}
            />
          )}
        </View>
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
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsView);
