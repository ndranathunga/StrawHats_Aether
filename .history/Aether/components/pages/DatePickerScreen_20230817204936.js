import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import CalendarPicker from 'react-native-calendar-picker';

export default function DatePickerScreen({ navigation }) {
	constructor(props) {
		super(props);
		this.state = {
		  selectedStartDate: null,
		};
		this.onDateChange = this.onDateChange.bind(this);
	  };
	
	  onDateChange(date) {
		this.setState({
		  selectedStartDate: date,
		});
	  };
	  render() {
		const { selectedStartDate } = this.state;
		const startDate = selectedStartDate ? selectedStartDate.toString() : '';
		return (
		  <View style={styles.container}>
			<CalendarPicker
			  onDateChange={this.onDateChange}
			/>
	
			<View>
			  <Text>SELECTED DATE:{ startDate }</Text>
			</View>
		  </View>
		);
	  };
}
