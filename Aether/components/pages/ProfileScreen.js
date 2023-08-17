import * as React from "react";
import { Button } from "react-native-paper";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function ProfileScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text
				onPress={() => navigation.navigate("Personal Info")}
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Profile Screen
			</Text>
			<Button
				mode="outlined"
				onPress={() => navigation.navigate("Search Results")}
			>
				Go to Search Results
			</Button>
		</View>
	);
}
