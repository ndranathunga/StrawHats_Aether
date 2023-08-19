import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
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
			</View>
		</DynamicBackground>
	);
}
