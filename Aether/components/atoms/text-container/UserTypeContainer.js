import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserTypeContainer = ({ name, type, title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{title}. {name}</Text>
			<Text style={styles.type}>{type}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
		marginBottom: 10,
		width: "70%",
	},
	name: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#fff",
	},
	type: {
		fontSize: 16,
            color: "#fff",
	},
});

export default UserTypeContainer;
