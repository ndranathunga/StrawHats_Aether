import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import Title1 from "../atoms/Text/Title1";
import Title3 from "../atoms/Text/Title3";

import CustomButton from "../atoms/buttons/CustomButton";
import IconButton from "../atoms/buttons/IconButton";
import TextContainer from "../atoms/text-container/TextContainer";
import TransparentCard from "../molecules/TransparentCard";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{   flex: 1, alignItems: "right", justifyContent: "top"}}>
			<Title3>Hello there, John</Title3>
			<Title1>Let's Explore Space</Title1>

			<Text
				onPress={() => alert('This is the "Home" screen.')}
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Home Screen
			</Text>

			<TransparentCard title={"hi"} content={"hi"} />

			{/* This works */}
			<CustomButton
			onPress={() => navigation.navigate("Date Picker")}
			title={"date picker"} />

			{/* WIP, not sure how this works */}
			<IconButton icon={"filter"} size={25} />
			<TextContainer title={"hi"} />
		</View>
	);
}

