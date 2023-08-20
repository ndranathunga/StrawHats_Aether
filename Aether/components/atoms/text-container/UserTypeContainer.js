import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserTypeContainer = ({ title, name, type }) => {
	return (
		<View style={ styles.container }>
			<Text style={styles.title}>{title}. {name}</Text>
			<Text style={styles.content}>{type}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// borderRadius: 10,
		// borderWidth: 1,
		// borderColor: "red",
		// backgroundColor: "red",
		// padding: 15,
		// marginBottom: 10,
		width: "95%",
		// boxShadow:
		// 	"2px 2px 7px 0px rgba(255, 255, 255, 0.20), 9px 9px 30px 0px rgba(255, 255, 255, 0.02) inset",
		// backdropFilter: "blur(13px)",
		// alignContent: "center",
		// alignItems: "center",
		// justifyContent: "center",
		marginBottom: 10,
	},
	containerLarge: {
		width: "90%",
	},

	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#fff",
	},
	content: {
		fontSize: 16,
		color: "white",
	},
});

export default UserTypeContainer;
