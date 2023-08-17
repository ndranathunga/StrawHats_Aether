import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import CustomButton from "../atoms/buttons/CustomButton";
import { useNavigation } from '@react-navigation/native';

import { defultBoxStyle } from '../atoms/Styles/defultBoxStyle';

export default function DatePickerScreen() {
  const navigation = useNavigation(); // Access the navigation object

  const [selectedStartDate, setSelectedStartDate] = React.useState(null);

  const onDateChange = date => {
    setSelectedStartDate(date);
    console.log(date.toString());
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" , padding=20}}>
      <View style={defultBoxStyle.container}>
        <CalendarPicker 
          width={300}
          selectedDayColor={'#84BCFF'}
          textStyle={styles.textStyle}
          onDateChange={onDateChange}
        />
      </View>

      <View style={defultBoxStyle.container}>
        <CalendarPicker 
          width={300}
          selectedDayColor={'#84BCFF'}
          textStyle={styles.textStyle}
          onDateChange={onDateChange}
        />
      </View>

      <CustomButton
        onPress={() => navigation.navigate("Home")} // Navigate to "Home" screen
        title={"Select"}
      />
    </View>
  );
}

// Rest of your styles...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden', // To make sure the border-radius is applied correctly
    shadowColor: 'white',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    margin: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    // fontFamily: 'Poppins',
    fontWeight: '500',
    letterSpacing: 0.45,
  },
});