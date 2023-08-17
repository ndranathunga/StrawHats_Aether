import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { defultBoxStyle } from '../atoms/styleSheets/defultBoxStyle';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    console.log(date.toString());
  }
  
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={defultBoxStyle.container }>
        <View></View>
        <CalendarPicker 
          margin={10}
          selectedDayColor={'#84BCFF'}
          textStyle={styles.textStyle}
          // add inside padding to the calander , because previouse and next buttons get cut out by the bounding box
          onDateChange={this.onDateChange}
        />
        <View>
      </View>
      
    );
  }
}

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