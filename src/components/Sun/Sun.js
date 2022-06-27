import React, {useState, useCallback, memo} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import SunRay from './SunRay';

const Sun = ({animate}) => {
  const [sizeBlockSunRayList, setSizeBlockSunRayList] = useState(0);

  const handleSetSizeBlockSunRayList = useCallback(
    (event) => {
      setSizeBlockSunRayList(event.nativeEvent.layout.height);
    },
    [sizeBlockSunRayList, handleSetSizeBlockSunRayList],
  );

  return (
    <View style={styles.sunLayer}>
      <View style={styles.sunLayer1} onLayout={handleSetSizeBlockSunRayList}>
        <View style={styles.sunLayer2}>
          <Text style={styles.text}>Sun</Text>
        </View>

        <SunRay animate={animate} sizeBlockSunRayList={sizeBlockSunRayList} />
{/* 
        <View
          style={{
            position: 'absolute',
            width: sizeBlockSunRayList,
            height: sizeBlockSunRayList,
            backgroundColor: 'orange',
            borderRadius: 999,
          }}></View> */}
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
  },
  sunLayer2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdd361',
    width: 120,
    height: 120,
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
