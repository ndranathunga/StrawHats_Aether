import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DynamicBackground from "../templates/DynamicBackground";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import NumberedSelectButtonRow from "../molecules/NumberedSelectButtonRow";
import textStyles from "../atoms/text/Styles";
import Body2 from "../atoms/text/Body2";
import Title4 from "../atoms/text/Title4";

export default function ExploreScreen({ navigation }) {
	const [selectedButton, setSelectedButton] = useState(null);
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [infants, setInfants] = useState(0);

	const handleButtonPress = (buttonNumber) => {
		setSelectedButton(buttonNumber);
	};

	return (
		<DynamicBackground>
			<CenterViewContainer>
				<View style={{ flex: 1, flexDirection: "column" }}>
					<View style={styles.container}>
						<View style={styles.textContainer}>
							<View style={{ flex: 3 }}>
								<Title4>Adults</Title4>
							</View>
							<View style={{ flex: 3, alignItems: "flex-end" }}>
								<Body2>12 years or above</Body2>
							</View>
						</View>
						<NumberedSelectButtonRow
							handlePress={(buttonNumber) => {
								setAdults(buttonNumber);
							}}
							selectedButton={adults}
							ButtonNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
							numberOfButtons={10}
						/>
					</View>

					<View style={styles.container}>
						<View style={styles.textContainer}>
							<View style={{ flex: 3 }}>
								<Title4>Children</Title4>
							</View>
							<View style={{ flex: 3, alignItems: "flex-end" }}>
								<Body2>2 -12 years</Body2>
							</View>
						</View>
						<NumberedSelectButtonRow
							handlePress={(buttonNumber) => {
								setAdults(buttonNumber);
							}}
							selectedButton={adults}
							ButtonNumbers={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
							numberOfButtons={10}
						/>
					</View>

					{/* <View style={styles.container}>
						<View style={styles.textContainer}>
							<View style={{ flex: 3 }}>
								<Title4>Infants</Title4>
							</View>
							<View style={{ flex: 3, alignItems: "flex-end" }}>
								<Body2>0 - 2 years</Body2>
							</View>
						</View>
						<NumberedSelectButtonRow
							handlePress={(buttonNumber) => {
								setAdults(buttonNumber);
							}}
							selectedButton={adults}
							ButtonNumbers={[0, 1, 2, 3, 4]}
							numberOfButtons={10}
						/>
					</View> */}
				</View>
			</CenterViewContainer>
		</DynamicBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 3,
		marginTop: 0,
		// flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flexDirection: "row",
		marginBottom: 15,
	},
});
