import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 300,
  },
  ballFrame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

const AnimatedBall = Animated.createAnimatedComponent(View);

const DemoAnimation = () => {
  const [animatedOpacity] = useState(new Animated.Value(1));

  const [isShowing, setShowing] = useState(true);

  useEffect(() => {
    Animated.spring(animatedOpacity, {
      toValue: isShowing ? 1 : 0,
      //   duration: 1000,
      useNativeDriver: true,
      damping: 8,
    }).start(({finished}) => {
      if (finished) {
        // alert('animation finished');
      }
    });
  }, [isShowing]);

  const animate = useCallback(() => {
    setShowing(prevValue => !prevValue);
  }, []);

  const buttonTitle = useMemo(() => {
    return isShowing ? 'Hide it' : 'Show it';
  }, [isShowing]);

  return (
    <View style={styles.container}>
      <AnimatedBall style={styles.ballFrame}>
        <AnimatedBall
          style={[
            styles.ball,
            {
              opacity: animatedOpacity.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, 0.4, 1],
              }),
              transform: [
                {
                  scale: animatedOpacity.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 1.5, 1],
                  }),
                },
                {
                  translateX: animatedOpacity.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 150, -150],
                  }),
                },
                {
                  translateY: animatedOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -150],
                  }),
                },
                {
                  rotate: animatedOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '440deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </AnimatedBall>

      <Button title={buttonTitle} onPress={animate} />
    </View>
  );
};

export default memo(DemoAnimation);
