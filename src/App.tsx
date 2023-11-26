// App.tsx
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import dbService from './services/dbService';
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
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

