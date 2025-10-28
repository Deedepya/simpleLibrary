
// Repo2/App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MiddleContent from './src/components/MiddleContent';

export default function App() {
  return (
    <View style={styles.container}>
      <MiddleContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
