import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';

type IconButtonProps = {
  icon: string;
  color: string;
  onPressed: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, color, onPressed }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPressed}>
      <Ionicons
        name={icon as any}
        size={24}
        color={color}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
