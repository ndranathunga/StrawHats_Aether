import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import DynamicBackground from "../templates/DynamicBackground";

export default function ExploreScreen({ navigation }) {
	return (
		<DynamicBackground>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text
					onPress={() => navigation.navigate("Home")}
					style={{ fontSize: 26, fontWeight: "bold" }}
				>
					Explore Screen
				</Text>
				<Button onPress={() => {navigation.navigate("Payments")}}>
				<Text>Payments</Text>
			</Button>
			<Button onPress={() => {navigation.navigate("Boarding Pass")}}>
				<Text>Boarding Pass</Text>
			</Button>
		</View>
		</DynamicBackground>
	);
}
