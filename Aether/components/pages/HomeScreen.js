import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import Title1 from "../atoms/text/Title1";
import Title3 from "../atoms/text/Title3";

import CustomButton from "../atoms/buttons/CustomButton";
import IconButton from "../atoms/buttons/IconButton";
import TextContainer from "../atoms/text-container/TextContainer";
import TransparentCard from "../molecules/TransparentCard";
import Nebula from "../molecules/Nebula";
import DynamicBackground from "../templates/DynamicBackground";
import CarouselCards from "../molecules/CarouselCards";


export default function HomeScreen({ navigation }) {
	return (
    <DynamicBackground>
		<View style={{ flex: 1, alignItems: "right", justifyContent: "top" }}>
			<Title3>Hello there, John</Title3>
			<Title1>Let's Explore Space</Title1>

			{/* <Text
				onPress={() => alert('This is the "Home" screen.')}
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Home Screen
			</Text> */}

			<TransparentCard title={"hi"} content={"hi"} />
			<Nebula/>
			<CarouselCards/>

			{/* This works */}
			{/* <CustomButton
				onPress={() => navigation.navigate("Date Picker")}
				title={"date picker"}
			/> */}

			{/* WIP, not sure how this works */}
			{/* <IconButton icon={"filter"} size={25} />
			<TextContainer title={"hi"} /> */}

			{/* <CustomButton
				onPress={() => navigation.navigate("Destination Search")}
				title={"Destination Search"}
			/> */}
		</View>
</DynamicBackground>
	);
}
