import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import PersonalInfoContainer from "../organisms/PersonalInfoContainer";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import DynamicBackground from "../templates/DynamicBackground";

export default function PersonalInfoScreen({ navigation }) {
	return (
		<DynamicBackground>
			<CenterViewContainer>
				<PersonalInfoContainer />
			</CenterViewContainer>
		</DynamicBackground>
	);
}
