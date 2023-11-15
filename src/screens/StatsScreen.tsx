import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calendar from '../components/calender'; // Import the Calendar component

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats</Text>
      <Calendar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default StatsScreen;

