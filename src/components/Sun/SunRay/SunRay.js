import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const SIZE_ITEM = 30;

const SunRay = ({animate, sizeBlockSunRayList}) => {
  const [sunRayList] = useState(
    Array.from({length: Math.floor(160 / (SIZE_ITEM / 4))}).map(() => ''),
  );

  const [rotateVal] = useState(new Animated.Value(0));

  const radius = useMemo(() => {
    return sizeBlockSunRayList / 2;
  }, [sizeBlockSunRayList]);

  const angleItem = useMemo(() => {
    return 360 / sunRayList.length;
  }, [sunRayList]);

  const rotateAnimation = useCallback(() => {
    Animated.stagger(300, [
      Animated.timing(rotateVal, {
        toValue: 150,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.delay(5000),
    ]).start();
  }, [rotateVal]);

  useEffect(() => {
    rotateAnimation();
  }, [animate]);

  return (
    <View style={styles.container}>
      {sunRayList.map((_, index) => {
        const angleThisItemDegree = angleItem * index;
        const angleThisItemRadius =
          (angleThisItemDegree * Math.PI) / 180 - Math.PI / 2;
        const coordinateItemStyle = {
          left: radius * Math.cos(angleThisItemRadius) + radius - SIZE_ITEM,
          top: radius * Math.sin(angleThisItemRadius) + radius - SIZE_ITEM,
          transform: [{rotate: `${angleThisItemDegree}deg`}],
        };

        return (
          <Animated.View
            key={index}
            style={[
              styles.sunRayItem,
              coordinateItemStyle,

              // animate && {
              //   transform: [{rotate: rotateVal}],
              // },
            ]}></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    transform: [{translateX: SIZE_ITEM / 2}, {translateY: SIZE_ITEM / 2}],
  },

  sunRayItem: {
    position: 'absolute',
    borderTopWidth: SIZE_ITEM,
    borderLeftWidth: SIZE_ITEM / 2,
    borderRightWidth: SIZE_ITEM / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#f77b00',
    borderRadius: 999,
  },
});

export default SunRay;
