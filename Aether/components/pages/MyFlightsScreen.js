import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import DynamicBackground from "../templates/DynamicBackground";
import CustomButton from "../atoms/buttons/CustomButton";

import { useBackground } from "../../context/BackgroundContext";

export default function MyFlightsScreen({ navigation }) {
	const { setBackground, imageList } = useBackground();
	return (
		<DynamicBackground>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text
					onPress={() => navigation.navigate("Choose Pod")}
					style={{ fontSize: 26, fontWeight: "bold" }}
				>
					My Flights Screen
				</Text>
				<View
					style={{
						marginVertical: 10,
					}}
				>
					<CustomButton
						onPress={() => setBackground("black", imageList[0].image)}
						title={"Change BG to Earth"}
					/>
				</View>
				<View
					style={{
						marginVertical: 10,
					}}
				>
					<CustomButton
						onPress={() => setBackground("black", imageList[1].image)}
						title={"Change BG to Mars"}
					/>
				</View>
				<View
					style={{
						marginVertical: 10,
					}}
				>
					<CustomButton
						onPress={() => setBackground("black", imageList[2].image)}
						title={"Change BG to Black Hole"}
					/>
				</View>
			</View>
		</DynamicBackground>
	);
}
