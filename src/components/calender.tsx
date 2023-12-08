import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import LeftArrow from '../assets/svgs/LeftArrow';
import RightArrow from '../assets/svgs/RightArrow';

const screenWidth = Dimensions.get('window').width;

const CalendarWrapper = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + offset);
      return newDate;
    });
  };

  const renderCustomHeader = () => {
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    return (
      <View style={styles.customHeader}>
        <Text style={styles.monthText}>{monthName}</Text>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => changeMonth(-1)} style={styles.arrowButton}>
            <LeftArrow />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeMonth(1)} style={styles.arrowButton}>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.calendarContainer}>
      <Calendar
        key={currentDate.getMonth().toString() + currentDate.getFullYear().toString()}
        current={currentDate.toISOString().split('T')[0]}
        theme={{
          calendarBackground: '#f0f0f0',
          textSectionTitleColor: '#000000',
          'stylesheet.calendar.header': {
            arrow: {
              display: 'none',
            },
          },
        }}
        renderHeader={renderCustomHeader}
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
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  monthText: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
    marginTop: -7,
  },
  arrowContainer: {
    flexDirection: 'row',
  },
  arrowButton: {
    padding: 10,
  },
});

export default CalendarWrapper;

