import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text ,Image} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import CustomButton from '../atoms/buttons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";


import { defultBoxStyle } from '../atoms/Styles/defultBoxStyle';
import Title1 from "../atoms/text/Title1";
import Title3 from "../atoms/text/Title3";
import Body1 from '../atoms/text/Body1';
import Body2 from '../atoms/text/Body2';

export default function DatePickerScreen() {
  const navigation = useNavigation();

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState(null);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setSelectedStartDate(date);
      if (selectedReturnDate && selectedReturnDate.isBefore(date, 'day')) {
        setSelectedReturnDate(null);
      }
    } else if (type === 'RETURN_DATE') {
      setSelectedReturnDate(date);
    }
  };

  const toggleReturnDatePicker = () => {
    if (showReturnDatePicker) {
      setSelectedReturnDate(null); // Reset the return date when calendar is hidden
    }
    setShowReturnDatePicker(!showReturnDatePicker);
  };

  const handleSelectPress = () => {
    // TODO: Implement saving selectedStartDate and selectedReturnDate to the database
    navigation.navigate('Home');
  };

  const formatDate = (date) => {
    if (date) {
      const formattedDate = date.format('DD MMM YYYY');
      return formattedDate;
    }
    return 'Select Date';
  };

  const isDateDisabled = (date, type) => {
    const today = moment();
    if (type === 'START_DATE' && selectedReturnDate) {
      return date.isAfter(selectedReturnDate, 'day') || date.isBefore(today, 'day');
    } else if (type === 'RETURN_DATE' && selectedStartDate) {
      return date.isBefore(selectedStartDate, 'day') || date.isBefore(today, 'day');
    }
    return date.isBefore(today, 'day');
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <View style={[defultBoxStyle.container, { margin: 5, padding: 0, marginTop: 0, marginBottom: 0, paddingTop: 5 ,paddingBottom:5}]}>
          <Body1>Departure</Body1>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            <Icon name="calendar-outline" size={20} color={"white"} style={{paddingRight:10}}/>
            <Title3 style={[styles.textStyle, { textAlign: 'center' }]}>
            {selectedStartDate ? formatDate(selectedStartDate) : 'Select Date'}
            </Title3>
            </View>
        </View>
        <TouchableOpacity
          style={[defultBoxStyle.container, { margin: 5, padding: 0, marginTop: 0, marginBottom: 0, paddingTop: 5,paddingBottom:5 }]}
          onPress={toggleReturnDatePicker}
        >
          <Body1>Return</Body1>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            <Icon name="calendar-outline" size={20} color={"white"} style={{paddingRight:10}}/>
            <Title3 style={{ textAlign: 'center' }}>
              {selectedReturnDate ? formatDate(selectedReturnDate) : 'Select Date'}
            </Title3>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex:1}}>
        <View style={{flex:0.5}}>
          <View style={[defultBoxStyle.container, { marginTop: 1, marginBottom: 5 }]}>
            <CalendarPicker
              width={280}
              selectedDayColor={'#84BCFF'}
              textStyle={styles.textStyle}
              onDateChange={(date) => onDateChange(date, 'START_DATE')}
              disabledDates={(date) => isDateDisabled(date, 'START_DATE')}
            />
          </View>
        </View>

        <View style={{flex:0.5}}>
          {showReturnDatePicker && (
            <View style={[defultBoxStyle.container, { marginTop: 1, marginBottom: 5 }]}>
              <CalendarPicker
                width={280}
                selectedDayColor={'#84BCFF'}
                textStyle={styles.textStyle}
                onDateChange={(date) => onDateChange(date, 'RETURN_DATE')}
                disabledDates={(date) => isDateDisabled(date, 'RETURN_DATE')}
              />
            </View>
          )}
        </View>
      </View>

      <CustomButton onPress={handleSelectPress} title={'Select'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.45,
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{ translateY: -8 }],
    paddingHorizontal: 10,
    flex:1,
  },
});
