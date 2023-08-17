import * as React from "react";
import { Button } from "react-native-paper";
import { View, Text } from "react-native";

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
				icon="camera"
				mode="outlined"
				onPress={() => console.log("Pressed")}
			>
				Press me
			</Button>
		</View>
	);
}
