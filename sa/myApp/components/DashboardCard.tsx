import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import StatusIndicator from './StatusIndicator';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: string;
  status: 'active' | 'warning' | 'critical';
  onViewDetails: () => void;
}

export default function DashboardCard({ 
  title, 
  value, 
  icon, 
  status, 
  onViewDetails 
}: DashboardCardProps) {
  const getStatusLabel = () => {
    switch (status) {
      case 'active': return 'Normal';
      case 'warning': return 'Needs Attention';
      case 'critical': return 'Critical';
      default: return 'Normal';
    }
  };

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onViewDetails}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <Text style={styles.value}>{value}</Text>
      
      <View style={styles.statusContainer}>
        <StatusIndicator 
          status={status} 
          label={getStatusLabel()}
          size="medium"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  statusContainer: {
    marginTop: 4,
  },
});