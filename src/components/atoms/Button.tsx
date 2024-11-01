import React from 'react';
import { Text, View, ViewStyle, TouchableHighlight } from 'react-native';
import { ButtonStyles } from '../../interfaces/atoms.interface';

function Button({
  children,
  onPress,
  style,
  title,
  backgroundColor,
}: {
  children?: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  title?: string;
  backgroundColor?: string;
}): JSX.Element {
  const styles: ButtonStyles = {
    button: {
      backgroundColor: backgroundColor ? backgroundColor : '#2196F3',
      padding: 10,
      borderRadius: 5,
    },
    text: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  return (
    <TouchableHighlight
      style={{
        ...styles.button,
        ...style,
      }}
      onPress={onPress}
      underlayColor={'#c0c0c0'}>
      <View style={styles.buttonContainer}>
        {children}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default Button;
