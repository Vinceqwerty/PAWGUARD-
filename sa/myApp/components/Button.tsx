import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({ 
  label, 
  onPress, 
  type = 'primary', 
  loading = false,
  disabled = false 
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    type === 'primary' ? styles.primaryButton : styles.secondaryButton,
    disabled && styles.disabledButton,
  ];

  const textStyles = [
    styles.buttonText,
    type === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={type === 'primary' ? '#fff' : '#007AFF'} />
      ) : (
        <Text style={textStyles}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  disabledText: {
    opacity: 0.7,
  },
});