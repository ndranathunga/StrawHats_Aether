import * as React from "react";
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Title1 from "../atoms/text/Title1";
import Title3 from "../atoms/text/Title3";

import CustomButton from "../atoms/buttons/CustomButton";
import IconButton from "../atoms/buttons/IconButton";
import TextContainer from "../atoms/text-container/TextContainer";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{backgroundColor: 'grey', flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Title3>Hello there, John</Title3>
			<Title1>Let's Explore Space</Title1>

			<Text
				onPress={() => alert('This is the "Home" screen.')}
				style={{ fontSize: 26, fontWeight: "bold" }}
			>
				Home Screen
			</Text>

			{/* This works */}
			<CustomButton title={'hi'}/>

			{/* WIP, not sure how this works */}
			<IconButton label={"test"} icon={<Ionicons icon='compass-sharp' size = {10} color={'grey'}/>}/>
			<TextContainer title={'hi'}/>
		</View>
	);
}