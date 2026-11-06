import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress?: () => void;
  size?: number;
  style?: ViewStyle;
};

export default function RoundIconButton({ icon, color, onPress, size = 44, style }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: color },
        style,
      ]}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={size * 0.5} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
});
