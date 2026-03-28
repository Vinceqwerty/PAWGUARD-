import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#d63384',
        tabBarInactiveTintColor: '#ffbfdc',
        headerStyle: {
          backgroundColor: '#d63384',
        },
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity onPress={() => router.replace('/(auth)/login')} style={{ marginRight: 15 }}>
            <Ionicons name="log-out" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Health Records',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}