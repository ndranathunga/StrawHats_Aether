import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextContainer = ({ title, content, large = false }) => {
	return (
		<View style={{ ...styles.container, ...(large && styles.containerLarge) }}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 0.40)",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		padding: 15,
		marginBottom: 10,
		width: "70%",
		boxShadow:
			"2px 2px 7px 0px rgba(255, 255, 255, 0.20), 9px 9px 30px 0px rgba(255, 255, 255, 0.02) inset",
		backdropFilter: "blur(13px)",
	},
	containerLarge: {
		width: "90%",
	},

	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#fff",
	},
	content: {
		fontSize: 14,
	},
});

export default TextContainer;
