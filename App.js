/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Button, DevSettings} from 'react-native';
import Sun from './src/components/Sun';

const App = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Sun />
      <Button title="Toggle" color={'#fbaa59'} onPress={() => DevSettings.reload()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333552',
  },
});

export default App;
