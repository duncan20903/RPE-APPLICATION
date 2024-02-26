import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const TimePicker = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Time: </Text>
      <TouchableOpacity onPress={showTimePicker}>
        <Text style={styles.selectedTime}>{selectedTime ? selectedTime.toLocaleTimeString() : 'Select Time'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color:  '#FFFFFF'
  },
  selectedTime: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default TimePicker;