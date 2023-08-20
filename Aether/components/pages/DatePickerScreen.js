import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import CustomButton from "../atoms/buttons/CustomButton";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SelectedDateCard from "../atoms/cards/SelectedDateCard";
import textStyles from "../atoms/text/Styles";
import DynamicBackground from "../templates/DynamicBackground";

import { defultBoxStyle } from "../atoms/Styles/defultBoxStyle";

export default function DatePickerScreen() {
	const navigation = useNavigation();

	const [selectedStartDate, setSelectedStartDate] = useState(null);
	const [selectedReturnDate, setSelectedReturnDate] = useState(null);
	const [showReturnDatePicker, setShowReturnDatePicker] = useState(true);

	const onDateChange = (date, type) => {
		if (type === "START_DATE") {
			setSelectedStartDate(date);
			if (selectedReturnDate && selectedReturnDate.isBefore(date, "day")) {
				setSelectedReturnDate(null);
			}
		} else if (type === "RETURN_DATE") {
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
		navigation.navigate("Select Passengers");
	};

	const formatDate = (date) => {
		if (date) {
			const formattedDate = date.format("DD MMM YYYY");
			return formattedDate;
		}
		return "Select Date";
	};

	const isDateDisabled = (date, type) => {
		const today = moment();
		if (type === "START_DATE" && selectedReturnDate) {
			return (
				date.isAfter(selectedReturnDate, "day") || date.isBefore(today, "day")
			);
		} else if (type === "RETURN_DATE" && selectedStartDate) {
			return (
				date.isBefore(selectedStartDate, "day") || date.isBefore(today, "day")
			);
		}
		return date.isBefore(today, "day");
	};

	return (
		<DynamicBackground>
			<CenterViewContainer>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						paddingHorizontal: 40,
						paddingBottom: 10,
					}}
				>
					<SelectedDateCard
						title={"Departure"}
						content={
							selectedStartDate ? formatDate(selectedStartDate) : "Select Date"
						}
					/>

					<SelectedDateCard
						onPress={toggleReturnDatePicker}
						title={"Return"}
						content={
							selectedReturnDate
								? formatDate(selectedReturnDate)
								: "Select Date"
						}
					/>
				</View>

				<View style={{ flex: 1 }}>
					<View style={{ flex: 0.45 }}>
						<View
							style={[
								defultBoxStyle.container,
								defultBoxStyle.sizes,
								{ marginTop: 1, marginBottom: 5 },
							]}
						>
							<CalendarPicker
								width={280}
								selectedDayColor={"#84BCFF"}
								textStyle={[textStyles.title3, { color: "white" }]}
								onDateChange={(date) => onDateChange(date, "START_DATE")}
								disabledDates={(date) => isDateDisabled(date, "START_DATE")}
							/>
						</View>
					</View>

					<View style={{ flex: 0.45 }}>
						{showReturnDatePicker && (
							<View
								style={[
									defultBoxStyle.container,
									defultBoxStyle.sizes,
									{ marginTop: 1, marginBottom: 5 },
								]}
							>
								<CalendarPicker
									width={280}
									selectedDayColor={"#84BCFF"}
									textStyle={[textStyles.title3, { color: "white" }]}
									onDateChange={(date) => onDateChange(date, "RETURN_DATE")}
									disabledDates={(date) => isDateDisabled(date, "RETURN_DATE")}
								/>
							</View>
						)}
					</View>
					<View
						style={{
							alignContent: "center",
							justifyContent: "center",
							alignItems: "center",
							marginTop: 10,
						}}
					>
						<CustomButton
							style={styles.btn}
							onPress={handleSelectPress}
							title={"Select"}
						/>
					</View>
				</View>
			</CenterViewContainer>
		</DynamicBackground>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		position: "absolute",
		left: 0,
		top: "50%",
		transform: [{ translateY: -8 }],
		paddingHorizontal: 10,
		flex: 1,
	},
	btn: {
		// width: "90%",
		// alignContent: "center",
		// justifyContent: "center",
		marginTop: 20,
		marginBottom: 50,
	},
});
