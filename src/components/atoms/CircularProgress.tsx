import React from 'react';
import { ActivityIndicator } from 'react-native';

function CircularProgress() {
  const styles = {
    activityIndicator: {
      flex: 1,
    },
  };
  return (
    <ActivityIndicator
      size="large"
      color="#2c6bed"
      style={styles.activityIndicator}
    />
  );
}

export default CircularProgress;
