import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthRecordsScreen() {
  const records = [
    {
      id: 1,
      name: 'Buddy',
      type: 'Dog',
      lastCheckup: '2026-03-01',
      notes: 'Vaccinations up-to-date, mild allergy treatment ongoing.',
    },
    {
      id: 2,
      name: 'Lucy',
      type: 'Dog',
      lastCheckup: '2026-02-20',
      notes: 'Dental cleaning completed, weight stable.',
    },
    {
      id: 3,
      name: 'Max',
      type: 'Dog',
      lastCheckup: '2026-04-15 (scheduled)',
      notes: 'Next wellness exam scheduled; monitor activity level.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Records</Text>
      <Text style={styles.subtitle}>Review pet health history and reports</Text>
      <View style={styles.cardContainer}>
        {records.map((record) => (
          <View key={record.id} style={styles.recordCard}>
            <Text style={styles.petName}>{record.name} ({record.type})</Text>
            <Text style={styles.recordText}>Last Checkup: {record.lastCheckup}</Text>
            <Text style={styles.recordText}>Notes: {record.notes}</Text>
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
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  recordText: {
    fontSize: 14,
    color: '#444',
  },
});