import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function AnimatedButton(props: any) {
  const {onLongPressComplete} = props;
  const progress = useSharedValue(0);
  const [isPressed, setIsPressed] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundPosition: `${progress.value * 100}% 0%`, // Animates background position
    };
  });

  const tap = Gesture.Tap()
    .onBegin(() => {
      progress.value = withTiming(1, {duration: 5000}, () => {
        runOnJS(onLongPressComplete)();
      });
    })
    .onFinalize(() => {
      setIsPressed(false);
      progress.value = withTiming(0, {duration: 500});
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <LinearGradient
          colors={['#5c95a0', '#007aff']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={StyleSheet.absoluteFillObject}>
          <Pressable style={styles.innerButton} onPress={() => {}}>
            <Text style={styles.text}>Hold to Discard</Text>
          </Pressable>
        </LinearGradient>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c95a0',
  },
  innerButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {AnimatedButton};
