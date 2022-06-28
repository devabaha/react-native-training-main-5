/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import Sun from './src/components/Sun';

const App = (props) => {
  const [isAnimate, setAnimate] = useState(false);

  const handleAnimate = useCallback(() => {
    setAnimate((preState) => !preState);
  }, [isAnimate, handleAnimate]);

  return (
    <SafeAreaView style={styles.container}>
      <Sun animate={isAnimate} />
      <Button title="Toggle" color={'#fbaa59'} onPress={handleAnimate} />
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
