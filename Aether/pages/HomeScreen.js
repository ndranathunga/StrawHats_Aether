import * as React from "react";
import { View, Text } from "react-native";

import Title1 from "../components/atoms/Text/Title1";
import Title3 from "../components/atoms/Text/Title3";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Title3>Hello there, John</Title3>
			<Title1>Let's Explore Space</Title1>

			<Text
				onPress={() => alert('This is the "Home" screen.')}
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Home Screen
			</Text>
		</View>
	);
}
