import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

const SIZE_ITEM = 30;

const SunRay = ({sunRayList, sizeBlockSunRayList}) => {
  const radius = useMemo(() => {
    return sizeBlockSunRayList / 2;
  }, [sizeBlockSunRayList]);

  const angleItem = useMemo(() => {
    return 360 / sunRayList.length;
  }, [sunRayList]);

  return (
    <View style={styles.container}>
      {sunRayList.map((_, index) => {
        const angleThisItem = angleItem * index;
        const coordinateItemStyle = {
          left:
            radius * Math.cos((angleThisItem * Math.PI) / 180 - Math.PI / 2) +
            radius -
            SIZE_ITEM,
          top:
            radius * Math.sin((angleThisItem * Math.PI) / 180 - Math.PI / 2) +
            radius -
            SIZE_ITEM,
          transform: [{rotate: `${angleThisItem}deg`}],
        };

        return (
          <View
            key={index}
            style={[styles.sunRayItem, coordinateItemStyle]}></View>
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
