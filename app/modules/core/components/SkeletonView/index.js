import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const SkeletonView = ({ containerStyle }) => {
  const anim = useRef(new Animated.Value(0)).current;
  const backgroundColor = '#d9d9d9';
  const highlightColor = '#e8e8e8';
  const translateX = React.useMemo(
    () =>
      anim.interpolate({
        inputRange: [0, 1],
        outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH]
      }),
    [anim]
  );
  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    );

    loop.start();

    return () => loop.stop();
  }, [anim]);

  return (
    <View
      style={[
        containerStyle,
        {
          backgroundColor,
          overflow: 'hidden'
        }
      ]}
    >
      <AnimatedLG
        colors={[
          backgroundColor,
          highlightColor,
          highlightColor,
          backgroundColor
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX }]
        }}
      />
    </View>
  );
};

export default SkeletonView;
