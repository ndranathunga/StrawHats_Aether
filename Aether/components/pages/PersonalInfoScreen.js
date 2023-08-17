import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import PersonalInfoContainer from "../organisms/PersonalInfoContainer";

export default function PersonalInfoScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<PersonalInfoContainer />
		</View>
	);
}
