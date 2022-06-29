import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  memo,
  useRef,
} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const SIZE_ITEM = 40;

const SunRay = ({animate, sizeBlockSunRayList, handleSunAnimate}) => {
  // create 2 array animation, map array for apply each element
  const [listItemSunRay] = useState({
    listSunRay: Array.from({
      length: Math.floor(sizeBlockSunRayList / (SIZE_ITEM / 4)),
    }).map(() => useRef(new Animated.Value(0)).current),
    listFireSunLight: Array.from({
      length: Math.floor(sizeBlockSunRayList / (SIZE_ITEM / 4)),
    }).map(() => useRef(new Animated.Value(0)).current),
  });

  const radius = useMemo(() => {
    return sizeBlockSunRayList / 2;
  }, [sizeBlockSunRayList]);

  const angleItem = useMemo(() => {
    return 360 / listItemSunRay.listSunRay.length;
  }, [listItemSunRay.listSunRay]);

  const handleRotateAnimation = useCallback(
    (toValue, duration) => {
      Animated.stagger(
        500,
        listItemSunRay.listSunRay.map((item) =>
          Animated.timing(item, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
          }),
        ),
      ).start(({finished}) => {
        if (finished && animate) {
          handleSunAnimate();
        }
      });
    },
    [animate, handleRotateAnimation],
  );

  const handleFireLightAnimation = useCallback(
    (duration) => {
      Animated.stagger(
        500,
        listItemSunRay.listFireSunLight.map((item) =>
          Animated.timing(item, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
        ),
      ).start();
    },
    [animate, handleFireLightAnimation],
  );

  useEffect(() => {
    const toValue = animate ? 1 : 0;
    const duration = animate ? 500 : 1000;
    if (animate) {
      handleRotateAnimation(toValue, duration);
    } else {
      handleRotateAnimation(toValue, duration);
      handleFireLightAnimation(duration);
    }
  }, [animate]);

  return (
    <View style={styles.container}>
      {listItemSunRay.listSunRay.map((item, index) => {
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
              {
                transform: [
                  {
                    rotate: item.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        `${angleThisItemDegree}deg`,
                        `${angleThisItemDegree + 180}deg`,
                      ],
                    }),
                  },
                ],
              },
            ]}>
            <Animated.View
              style={[
                styles.sunLight,
                {
                  opacity: item.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
                !animate && {
                  transform: [
                    {
                      translateY: listItemSunRay.listFireSunLight[
                        index
                      ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 360],
                      }),
                    },
                  ],
                },
              ]}></Animated.View>
          </Animated.View>
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
  sunLight: {
    position: 'absolute',
    top: 1.5 * SIZE_ITEM,
    width: 2,
    height: 2 * SIZE_ITEM,
    backgroundColor: '#f4af01',
  },
});

export default memo(SunRay);
