import SkeletonView from '@core/components/SkeletonView';
import React from 'react';
import { View } from 'react-native';
import styles from '@core/views/PublicationLoadingView/styles';
import Divider from '@core/components/Divider';

export const AdditionalInfoItem = () => {
  return (
    <View style={styles.additionalContainer}>
      <SkeletonView containerStyle={styles.title} />
      <Divider />
      <SkeletonView containerStyle={styles.firstLine} />
      <SkeletonView containerStyle={styles.secondLine} />
      <SkeletonView containerStyle={styles.thirdLine} />
    </View>
  );
};

export const InfoComponent = () => {
  return (
    <View style={styles.componentContainer}>
      <SkeletonView containerStyle={styles.type} />
      <SkeletonView containerStyle={styles.logo} />
      <SkeletonView containerStyle={styles.value} />
    </View>
  );
};

export const InformationItem = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.contactInfo}>
        <SkeletonView containerStyle={styles.phoneNumber} />
        <SkeletonView containerStyle={styles.date} />
      </View>
      <Divider />
      <View style={styles.petInfo}>
        <InfoComponent />
        <InfoComponent />
        <InfoComponent />
      </View>
    </View>
  );
};
export const HeaderItem = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <SkeletonView containerStyle={styles.profileImage} />
        <SkeletonView containerStyle={styles.profileUsername} />
      </View>
      <SkeletonView containerStyle={styles.publicationType} />
    </View>
  );
};

const PublicationLoadingView = () => {
  return (
    <View style={styles.content}>
      <SkeletonView containerStyle={styles.actions} />
      <HeaderItem />
      <SkeletonView containerStyle={styles.image} />
      <InformationItem />
      <AdditionalInfoItem />
    </View>
  );
};

export default PublicationLoadingView;
