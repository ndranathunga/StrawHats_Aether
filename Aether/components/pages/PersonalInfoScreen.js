import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import PersonalInfoContainer from "../organisms/PersonalInfoContainer";
import DynamicBackground from "../templates/DynamicBackground";

export default function PersonalInfoScreen({ navigation }) {
	return (
		<DynamicBackground>
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<PersonalInfoContainer />
		</View>
		</DynamicBackground>
	);
}
