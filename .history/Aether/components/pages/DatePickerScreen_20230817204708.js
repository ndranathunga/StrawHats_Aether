import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import CalendarPicker from 'react-native-calendar-picker';

export default function DatePickerScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Date Picker Screen
			</Text>
		</View>
	);
}
