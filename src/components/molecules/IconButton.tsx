import React, { ComponentType } from 'react';
import { View, ViewStyle } from 'react-native';
import Button from '../atoms/Button';
import { ImageProps, SvgProps } from 'react-native-svg';

function IconButton({
  title,
  Image,
  onPress,
  style,
  color,
  backgroundColor,
  size,
}: {
  title?: string;
  Image: ComponentType<ImageProps | SvgProps>;
  onPress: () => void;
  style?: ViewStyle;
  color?: string;
  backgroundColor?: string;
  size?: number;
}): JSX.Element {
  const styles = {
    imageContainer: {
      marginRight: title ? 10 : 0,
    },
  };
  return (
    <Button
      onPress={onPress}
      title={title}
      style={style}
      backgroundColor={backgroundColor}>
      <View style={styles.imageContainer}>
        <Image
          width={size || 20}
          height={size || 20}
          fill={color || '#ffffff'}
        />
      </View>
    </Button>
  );
}

export default IconButton;
