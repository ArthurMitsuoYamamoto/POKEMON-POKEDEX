import React from 'react';
import { View, StyleSheet } from 'react-native';

const Backdrop = () => {
  return <View style={styles.backdrop} />;
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default Backdrop;
