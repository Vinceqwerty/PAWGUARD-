import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthRecordsScreen() {
  const records = [
    {
      id: 1,
      timestamp: 'March 28, 2026 — 3:15 PM',
      heartRate: '92 BPM',
      temp: '38.4°C',
      location: 'Safe Zone',
    },
    {
      id: 2,
      timestamp: 'March 28, 2026 — 2:05 PM',
      alert: '⚠ High Temperature Alert',
      temp: '39.8°C',
      location: 'Dog Park',
    },
    {
      id: 3,
      timestamp: 'March 28, 2026 — 1:30 PM',
      heartRate: '88 BPM',
      temp: '38.1°C',
      location: 'Safe Zone',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Records</Text>
      <Text style={styles.subtitle}>Review pet health history and reports</Text>
      <View style={styles.cardContainer}>
        {records.map((record) => (
          <View key={record.id} style={styles.recordCard}>
            <Text style={styles.timestamp}>{record.timestamp}</Text>
            {record.alert ? (
              <Text style={styles.alertText}>{record.alert}</Text>
            ) : (
              <Text style={styles.recordText}>Heart Rate: {record.heartRate}</Text>
            )}
            <Text style={styles.recordText}>Temp: {record.temp}</Text>
            <Text style={styles.recordText}>Location: {record.location}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  recordCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  timestamp: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#222',
  },
  alertText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#b53333',
    marginBottom: 4,
  },
  recordText: {
    fontSize: 14,
    color: '#444',
  },
});