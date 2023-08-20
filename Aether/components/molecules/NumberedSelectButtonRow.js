import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PassengerButton from "../atoms/buttons/PassengerButton";

export default function NumberedSelectButtonRow({
	handlePress,
	selectedButton, // Change selected to selectedButton
	ButtonNumbers,
	numberOfButtons,
}) {
	// Limit the number of buttons to a maximum of 10
	const buttonCount = Math.min(numberOfButtons, 10);

	return (
		<View style={styles.container}>
			<View style={styles.seatRow}>
				{ButtonNumbers.slice(0, buttonCount).map((buttonNumber) => (
					<PassengerButton
						key={buttonNumber}
						seatNumber={buttonNumber}
						isSelected={selectedButton === buttonNumber}
						onPress={handlePress} // No need to change here
					/>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// justifyContent: "center",
		alignItems: "center",
		// padding: 16,
		flex: 1,
	},
	seatRow: {
		flexDirection: "row",
	},
});
