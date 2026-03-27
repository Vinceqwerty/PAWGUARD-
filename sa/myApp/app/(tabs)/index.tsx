import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DashboardCard from '../../components/DashboardCard';
import { dashboardData } from '../../constants/systemData';

export default function DashboardScreen() {
  const handleViewDetails = (item: any) => {
    console.log('View details for:', item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.subtitle}>Here's what's happening with your pets</Text>
        </View>

        <View style={styles.statsContainer}>
          {dashboardData.stats.map((item) => (
            <DashboardCard
              key={item.id}
              title={item.title}
              value={item.value}
              icon={item.icon === 'alert' ? '⚠️' : item.icon === 'pets' ? '🐾' : item.icon === 'pending' ? '⏳' : '✅'}
              status={item.status as 'active' | 'warning' | 'critical'}
              onViewDetails={() => handleViewDetails(item)}
            />
          ))}
        </View>

        <View style={styles.recentActivity}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <Text style={styles.activityText}>• Alert: Dog #1234 needs attention</Text>
            <Text style={styles.activityText}>• 3 new pets added to monitoring</Text>
            <Text style={styles.activityText}>• System check completed successfully</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    paddingVertical: 8,
  },
  recentActivity: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activityText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
});