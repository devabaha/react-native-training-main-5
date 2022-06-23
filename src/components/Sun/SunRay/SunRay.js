import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

const SIZE_ITEM = 30;

const SunRay = ({sunRayList, sizeBlockSunRayList}) => {
  const RADIUS = useMemo(() => {
    return (sizeBlockSunRayList + SIZE_ITEM) / 2;
  }, [sizeBlockSunRayList]);

  const ANGLE_ITEM = useMemo(() => {
    return (2 * Math.PI) / sunRayList.length;
  }, [sunRayList]);

  return (
    <View style={styles.container}>
      {sunRayList.map((_, index) => {
        const ANGLE_THIS_ITEM = ANGLE_ITEM * index - Math.PI / 2;
        const COORDINATE_ITEM = {
          left: RADIUS * Math.cos(ANGLE_THIS_ITEM) + RADIUS - SIZE_ITEM,
          top: RADIUS * Math.sin(ANGLE_THIS_ITEM) + RADIUS - SIZE_ITEM,
        };

        return (
          <View key={index} style={[styles.sunRayItem, COORDINATE_ITEM]}></View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  sunRayItem: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#f77b00',
    position: 'absolute',
  },
});

export default SunRay;
