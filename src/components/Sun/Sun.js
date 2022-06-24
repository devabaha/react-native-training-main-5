import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import SunRay from './SunRay';

const Sun = (props) => {
  const [sunRayList] = useState(['', '', '', '', '', '', '', '', '']);
  const [sizeBlockSunRayList, setSizeBlockSunRayList] = useState(0);

  const handleSetSizeBlockSunRayList = useCallback(
    (event) => {
      setSizeBlockSunRayList(event.nativeEvent.layout.height);
    },
    [sunRayList],
  );

  return (
    <View style={styles.sunLayer}>
      <View style={styles.sunLayer1} onLayout={handleSetSizeBlockSunRayList}>
        <View style={styles.sunLayer2}>
          <Text style={styles.text}>Sun</Text>
        </View>

        <SunRay
          sunRayList={sunRayList}
          sizeBlockSunRayList={sizeBlockSunRayList}
        />

        {/* <View
          style={{
            position: 'absolute',
            width: 180,
            height: 180,
            borderWidth: 2,
            borderColor: '#f77b00',
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

export default Sun;
