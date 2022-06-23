import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import SunRay from './SunRay';

const Sun = (props) => {
  const [sunRayList] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [sizeBlockSunRayList, setSizeBlockSunRayList] = useState(0);

  const onLayout = useCallback(
    (event) => {
      setSizeBlockSunRayList(event.nativeEvent.layout.height);
    },
    [sunRayList],
  );

  return (
    <View>
      <View style={styles.sunLayer} onLayout={onLayout}>
        <View style={styles.sunLayer1}>
          <View style={styles.sunLayer2}>
            <Text style={styles.text}>Sun</Text>
          </View>
        </View>
        <SunRay
          sunRayList={sunRayList}
          sizeBlockSunRayList={sizeBlockSunRayList}
        />
      </View>
      <Button title="Toggle" color={'#fbaa59'} />
    </View>
  );
};

const styles = StyleSheet.create({
  sunLayer: {
    borderRadius: 999,
    marginBottom: 50,
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
    fontSize: 18,
  },
});

export default Sun;
