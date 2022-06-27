import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SunRay from './SunRay';

const SIZE_BLOCK_SUN_RAY_LIST = 160;

const Sun = ({animate}) => {
  return (
    <View style={[styles.sunLayer]}>
      <SunRay animate={animate} sizeBlockSunRayList={SIZE_BLOCK_SUN_RAY_LIST} />
      <View style={styles.sunLayer1}>
        <View style={styles.sunLayer2}>
          <Text style={styles.text}>Sun</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sunLayer: {
    padding: 20,
    borderRadius: 999,
    width: SIZE_BLOCK_SUN_RAY_LIST,
    height: SIZE_BLOCK_SUN_RAY_LIST,
    marginBottom: 100,
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
