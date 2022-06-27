import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SunRay from './SunRay';

const SIZE_BLOCK_SUN_RAY_LIST = 160;
const Sun = ({animate}) => {
  return (
    <View style={styles.sunLayer}>
      <View style={[styles.sunLayer1]}>
        <SunRay
          animate={animate}
          sizeBlockSunRayList={SIZE_BLOCK_SUN_RAY_LIST}
        />
        <View style={styles.sunLayer2}>
          <Text style={styles.text}>Sun</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sunLayer: {
    borderRadius: 999,
    marginBottom: 100,
    padding: 70,
    borderWidth: 2,
    borderColor: '#f77b00',
  },
  sunLayer1: {
    padding: 20,
    backgroundColor: '#8d7e73',
    borderRadius: 999,
    width: SIZE_BLOCK_SUN_RAY_LIST,
    height: SIZE_BLOCK_SUN_RAY_LIST,
  },
  sunLayer2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdd361',
    width: SIZE_BLOCK_SUN_RAY_LIST,
    height: SIZE_BLOCK_SUN_RAY_LIST,
    borderWidth: 20,
    borderColor: '#fbaa59',
    borderRadius: 999,
  },
  text: {
    color: '#333552',
    fontWeight: '600',
    fontSize: 22,
  },
});

export default memo(Sun);
