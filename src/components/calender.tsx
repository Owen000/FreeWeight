import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const screenWidth = Dimensions.get('window').width;

const CalendarWrapper = () => {
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        theme={{
          calendarBackground: '#f0f0f0',
          textSectionTitleColor: '#000000',

        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: screenWidth - 50,
    alignSelf: 'center',
  },
});

export default CalendarWrapper;

