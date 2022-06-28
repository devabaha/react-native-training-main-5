import React, {useState, useCallback, memo} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import SunRay from './SunRay';

const SIZE_BLOCK_SUN_RAY_LIST = 160;

const Sun = ({animate}) => {
  const [sunAnimation] = useState(new Animated.Value(0));

  const handleSunAnimate = useCallback(() => {
    Animated.sequence([
      // Animated.spring(sunAnimation, {
      //   toValue: 100,
      //   friction: 2,
      //   tension: 140,
      //   useNativeDriver: true,
      // }),
      Animated.timing(sunAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(sunAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [handleSunAnimate]);

  return (
    <Animated.View
      style={[
        styles.sunLayer,
        {
          transform: [
            {
              scale: sunAnimation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.2, 1.4],
              }),
            },
            {
              rotate: sunAnimation.interpolate({
                inputRange: [0, 0.25, 0.5, 0.75, 1],
                outputRange: ['0deg', '30deg', '-30deg', '30deg', '-30deg'],
              }),
            },
          ],
        },
      ]}>
      <SunRay
        animate={animate}
        sizeBlockSunRayList={SIZE_BLOCK_SUN_RAY_LIST}
        handleSunAnimate={handleSunAnimate}
      />
      <View style={styles.sunLayer1}>
        <View style={styles.sunLayer2}>
          <Text style={styles.text}>Sun</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sunLayer: {
    padding: 20,
    borderRadius: 999,
    width: SIZE_BLOCK_SUN_RAY_LIST,
    height: SIZE_BLOCK_SUN_RAY_LIST,
    marginBottom: 40,
  },
  sunLayer1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbaa59',
    width: SIZE_BLOCK_SUN_RAY_LIST,
    height: SIZE_BLOCK_SUN_RAY_LIST,
    borderWidth: 20,
    borderColor: '#cc9b56',
    borderRadius: 999,
  },
  sunLayer2: {
    backgroundColor: '#d97846',
    paddingHorizontal: 20,
    paddingVertical: 26,
    borderRadius: 999,
  },
  text: {
    color: '#333552',
    fontWeight: '600',
    fontSize: 22,
  },
});

export default memo(Sun);
