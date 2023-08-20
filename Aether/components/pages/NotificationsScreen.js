import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import DynamicBackground from "../templates/DynamicBackground";
import Body1 from "../atoms/text/Body1";

const NotificaitonsScreen = () => {
	return (
		<DynamicBackground>
			<View style={styles.container}>
				<Text style={styles.message}>All caught up!</Text>
				<Body1 style={styles.body}>
					Smooth space travels! No notifications to report at the moment. Enjoy
					your cosmic journey with Aether!
				</Body1>
			</View>
		</DynamicBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 50,
	},
	message: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#f0f0f0",
	},
	body: { textAlign: "center", paddingHorizontal: 30 },
});

export default NotificaitonsScreen;
