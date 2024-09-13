import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AnimatedButton} from '@src/component/button/AnimatedButton';

function App() {
  return (
    <GestureHandlerRootView style={styles.gestureViewStyle}>
      <AnimatedButton
        onLongPressComplete={() => console.log('Lon Press Done!')}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureViewStyle: {
    flex: 1,
  },
});

export default App;
