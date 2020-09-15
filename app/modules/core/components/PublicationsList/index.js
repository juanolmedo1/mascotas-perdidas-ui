import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import EmptyList from '@core/views/EmptyList';
import PublicationCard from '@core/components/PublicationCard';
import styles from '@core/components/PublicationsList/styles';

const publicationList = ({ data, refreshControlProps }) => {
  const refreshing = refreshControlProps
    ? refreshControlProps.refreshing
    : null;
  const onRefresh = refreshControlProps ? refreshControlProps.onRefresh : null;
  return !data.length ? (
    <EmptyList />
  ) : (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={data}
      numColumns={2}
      contentContainerStyle={styles.list}
      refreshControl={
        refreshControlProps ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : null
      }
      renderItem={({ item }) => (
        <PublicationCard
          key={item.id}
          id={item.id}
          date={item.createdAt}
          type={item.type}
          username={item.creator.username}
          profileImageBase64={item.creator.profilePicture.data}
          profileImageType={item.creator.profilePicture.type}
          imageType={item.pet.photos[0].type}
          imageShownBase64={item.pet.photos[0].data}
        />
      )}
    />
  );
};

publicationList.propTypes = {
  data: PropTypes.array,
  refreshControlProps: PropTypes.object
};

export default publicationList;
