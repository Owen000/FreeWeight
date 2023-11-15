import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const screenWidth = Dimensions.get('window').width; // Get the width of the screen

const CalendarWrapper = () => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        // Apply the styles through the theme prop
        theme={{
          calendarBackground: '#f0f0f0', // This sets the calendar background to grey
          // ... other theme styles as needed
        }}
        // Any other props you want to pass to the Calendar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 15, // Rounded corners
    overflow: 'hidden', // Ensures the Calendar does not overflow the rounded corners
    width: screenWidth - 50, // Set the width to the screen width minus some margin
    alignSelf: 'center', // Center the calendar horizontally
  },
  // ... any other styles you may have
});

export default CalendarWrapper;

