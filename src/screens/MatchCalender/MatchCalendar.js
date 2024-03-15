import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

const MatchScheduler = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState({});

  const navigation = useNavigation();

  // Function to handle date selection
  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
  };

  // Function to add time slot for selected date
  const addTimeSlot = (startTime, endTime) => {
    if (!timeSlots[selectedDate]) {
      setTimeSlots({...timeSlots, [selectedDate]: []});
    }
    setTimeSlots(prev => ({startTime, endTime, selectedDate}));
  };

  // Function to handle navigation to MatchDetailsScreen
  const goToMatchDetails = () => {
    navigation.navigate('MatchDetails', {selectedDate, timeSlots});
  };

  // Function to handle adding all days
  const handleAddAllDays = () => {
    const allDates = Object.keys(selectedDates).reduce((acc, date) => {
      acc[date] = {selected: true};
      return acc;
    }, {});
    setSelectedDates(allDates);
  };
  const renderTimeSlots = () => {
    if (selectedDate && timeSlots['selectedDate']) {
      return (
        <Text>
          {timeSlots.startTime} - {timeSlots.endTime}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Match Scheduler</Text>
      <TouchableOpacity onPress={handleAddAllDays}>
        <Text style={{fontSize: 16, marginBottom: 10}}>Select All Days</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 16, marginBottom: 10}}>
        Select Dates for Match Scheduling:
      </Text>
      <Calendar onDayPress={handleDateSelect} markedDates={selectedDates} />
      {selectedDate && (
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 16}}>Selected Date: {selectedDate}</Text>
          <Text style={{fontSize: 16, marginTop: 10}}>Add Time Slot:</Text>
          <TouchableOpacity onPress={() => addTimeSlot('09:00', '11:00')}>
            <Text style={{fontSize: 14, marginTop: 5}}>9:00 AM - 11:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addTimeSlot('13:00', '15:00')}>
            <Text style={{fontSize: 14, marginTop: 5}}>1:00 PM - 3:00 PM</Text>
          </TouchableOpacity>

          <Text>Added Time slots</Text>
          {renderTimeSlots()}
          {/* Add more time slot options as needed */}
          <TouchableOpacity onPress={goToMatchDetails}>
            <Text style={{fontSize: 16, color: 'blue', marginTop: 20}}>
              Proceed to Match Details
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MatchScheduler;
