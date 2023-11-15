import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import dbService from './services/dbService.tsx';

import MainNavigator from './navigation/MainNavigator';

export default function App() {
  useEffect(() => {
    async function initializeDatabase() {
      try {
        await dbService.initializeDb();
        console.log('Database initialized successfully');
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    }

    initializeDatabase();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

