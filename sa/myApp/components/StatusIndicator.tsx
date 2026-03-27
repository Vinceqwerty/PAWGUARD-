import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusIndicatorProps {
  status: 'active' | 'warning' | 'critical' | 'success' | 'error' | 'info';
  label: string;
  size?: 'small' | 'medium' | 'large';
}

export default function StatusIndicator({ 
  status, 
  label, 
  size = 'small' 
}: StatusIndicatorProps) {
  const statusColors: Record<string, string> = {
    active: '#28a745',
    warning: '#ffc107',
    critical: '#dc3545',
    success: '#28a745',
    error: '#dc3545',
    info: '#17a2b8',
    default: '#6c757d',
  };

  const getStatusColor = () => {
    return statusColors[status] || statusColors.default;
  };

  const getDotSize = () => {
    switch (size) {
      case 'small': return 8;
      case 'medium': return 10;
      case 'large': return 12;
      default: return 8;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'small': return 12;
      case 'medium': return 14;
      case 'large': return 16;
      default: return 12;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dot,
          {
            backgroundColor: getStatusColor(),
            width: getDotSize(),
            height: getDotSize(),
            borderRadius: getDotSize() / 2,
          },
        ]}
      />
      <Text
        style={[
          styles.label,
          {
            fontSize: getFontSize(),
            color: getStatusColor(),
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginRight: 6,
  },
  label: {
    fontWeight: '500',
  },
});