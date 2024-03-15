import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import {navigate} from '@/navigation/navigationRef';
import { NAVIGATION } from '@/constants/navigation';

const MatchScheduler = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState({});
  const navigation = useNavigation();

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
  };

  const addTimeSlot = (startTime, endTime) => {
    if (!selectedDate) {
      Alert.alert('Select Date', 'Please select a date first.');
      return;
    }
    setTimeSlots(prev => ({startTime, endTime, selectedDate}));
  };

  const goToMatchDetails = () => {
    if (Object.keys(timeSlots).length === 0) {
      Alert.alert('Select Time Slots', 'Please select at least one time slot.');
      return;
    }
    navigate(NAVIGATION.matchDetails, {selectedDate, timeSlots});
  };

  const handleAddAllDays = () => {
    const allDates = Object.keys(selectedDates).reduce((acc, date) => {
      acc[date] = {selected: true};
      return acc;
    }, {});
    setSelectedDates(allDates);
  };

  const renderTimeSlots = () => {
    if (timeSlots && timeSlots?.startTime) {
      const {startTime, endTime} = timeSlots;
      return (
        <Text>
          {startTime} - {endTime}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Match Scheduler</Text>
      {/* <TouchableOpacity onPress={handleAddAllDays}>
        <Text style={{fontSize: 16, marginBottom: 10, color: 'blue'}}>
          Select All Days
        </Text>
      </TouchableOpacity> */}
      <Text style={{fontSize: 16, marginBottom: 10}}>
        Select Dates for Match Scheduling:
      </Text>
      <Calendar
        minDate={new Date()}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: {selected: true, selectedColor: 'orange'},
        }}
      />
      {selectedDate && (
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 16}}>Selected Date: {selectedDate}</Text>
          <Text style={{fontSize: 16, marginTop: 10}}>Add Time Slot:</Text>
          <TouchableOpacity onPress={() => addTimeSlot('09:00', '11:00')}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                color: selectedDate ? 'blue' : 'grey',
              }}>
              9:00 AM - 11:00 AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addTimeSlot('13:00', '15:00')}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                color: selectedDate ? 'blue' : 'grey',
              }}>
              1:00 PM - 3:00 PM
            </Text>
          </TouchableOpacity>

          <Text>Added Time slots</Text>
          {renderTimeSlots()}
          {/* Add more time slot options as needed */}
          <TouchableOpacity
            onPress={goToMatchDetails}
            disabled={Object.keys(timeSlots).length === 0}>
            <Text
              style={{
                fontSize: 16,
                color: Object.keys(timeSlots).length === 0 ? 'grey' : 'blue',
                marginTop: 20,
              }}>
              Proceed to Match Details
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MatchScheduler;
