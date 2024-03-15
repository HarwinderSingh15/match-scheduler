import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TimeSlot = ({ startTime, endTime, onStartTimeChange, onEndTimeChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Start Time (e.g., 3:00 PM)"
        value={startTime}
        onChangeText={onStartTimeChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="End Time (e.g., 5:00 PM)"
        value={endTime}
        onChangeText={onEndTimeChange}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default TimeSlot;
