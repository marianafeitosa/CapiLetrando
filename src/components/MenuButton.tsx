import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import fonts from '../constants/fonts';

type Props = {
  label: string;
  color: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
};

export default function MenuButton({ label, color, onPress, icon, style }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.btn, { backgroundColor: color }, style]}
    >
      {icon}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    borderRadius: 22,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontFamily: fonts.extraBold,
    marginLeft: 10,
    letterSpacing: 0.5,
  },
});
