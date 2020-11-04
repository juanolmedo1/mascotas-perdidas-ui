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
                  photo={item.photo}
                  publicationId={item.publicationId}
                  type={item.type}
                  username={item.userCreator.username}
                  userPhoto={item.userCreator.profilePicture.data}
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
