import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../atoms/buttons/CustomButton";
import TextContainer from "../atoms/text-container/TextContainer";
import TransparentCard from "../molecules/TransparentCard";
import DynamicBackground from "../templates/DynamicBackground";
import NebulaButton from "../atoms/buttons/NebulaButton";
import CarouselCards from "../molecules/CarouselCards";

export default function HomeScreen({ navigation }) {

	return (
		<DynamicBackground>
			<ScrollView>
				<View style={styles.container}>
					<TransparentCard navigation={navigation} />
					<NebulaButton navigation={navigation} />
					<CarouselCards />
				</View>
			</ScrollView>
		</DynamicBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "top",
	},
});
