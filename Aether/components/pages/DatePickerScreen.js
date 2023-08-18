import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity ,Text} from 'react-native';
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
    
    <View style={styles.container}>
      <View style={{ flex: 0.3,flexDirection: 'row', alignItems: "center", justifyContent: "center" , padding: 10}}>
        <TouchableOpacity style={[defultBoxStyle.container,{margin: 5, padding:0 , marginTop:0, marginBottom:0}]}>
          <Text style={[styles.textStyle,{textAlign: 'center',}]}>
            Current Date
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defultBoxStyle.container,{margin: 5, padding:0 , marginTop:0, marginBottom:0}]}>
          <Text style={[styles.textStyle,{textAlign: 'center',}]}>
            Return Date
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[defultBoxStyle.container,{marginTop:1,marginBottom:5}]}>
        <CalendarPicker 
          width={280}
          selectedDayColor={'#84BCFF'}
          textStyle={styles.textStyle}
          onDateChange={onDateChange}
        />
      </View>

      <View style={[defultBoxStyle.container,{marginTop:5}]}>
        <CalendarPicker 
          width={280}
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


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" , 
    padding: 20
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    // fontFamily: 'Poppins',
    fontWeight: '500',
    letterSpacing: 0.45,
  },
});