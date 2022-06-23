import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SunLight = (props) => {
  return (
    <View style={styles.container}>
      <Text>SunLight</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdd7af'
    }
})

export default SunLight;
