import React from "react";
import {
	TouchableOpacity,
	Text,
	Linking,
	StyleSheet,
	Image,
	View,
} from "react-native";
import Title1 from "../text/Title1";
import Title4 from "../text/Title4";
import Body1 from "../text/Body1";
import Nebula from "../../../assets/images/nebula/nebani.png";

export default function NebulaButton({ navigation }) {
	const openNebulaChatbot = () => {
		// Replace 'nebula-chatbot-url' with the actual URL of your Nebula chatbot

		navigation.navigate("Nebula");
		// Open the chatbot URL in the device's default web browser
		// Linking.openURL(chatbotUrl);
	};

	return (
		<TouchableOpacity onPress={openNebulaChatbot} style={styles.container}>
			<View style={styles.subContainer}>
				<Title1 style={styles.title}>Chat with Nebula</Title1>
				<Body1>Your Cosmic Companion for Interstellar Inquiries</Body1>
			</View>

			<Image
				source={Nebula} // Replace with the actual path to your image
				style={styles.image}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		backgroundColor: "transparent",
		justifyContent: "space-between",
		borderRadius: 5,
		marginBottom: 3,
		// backgroundColor: "#FFFFFF10",
		backgroundColor: "rgba(0, 0, 0, 0.1)",
		width: "90%",
		flexDirection: "row",
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 10,
		shadowColor: "white",
		shadowOpacity: 0.5,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 1,
		},
	},
	title: {
		// marginTop: 10,
	},
	subContainer: {
		flex: 1,
		alignContent: "center",
		// alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
	},
});
