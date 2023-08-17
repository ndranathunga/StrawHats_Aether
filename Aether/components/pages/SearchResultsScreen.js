import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";

import TextContainer from "../atoms/text-container/TextContainer";
import Title3 from "../atoms/text/Title3";
import Body2 from "../atoms/text/Body2";

export default function SearchResultsScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState({
		startingLocation: "Earth",
		destination: "Mars",
		departureDate: "28 Apr",
		noOfPassengers: "3 Travelers",
		flightClass: "Economy",
	});

	const searchQueryTitle = (
		<Title3>
			{searchQuery.startingLocation} - {searchQuery.destination} |{" "}
			{searchQuery.departureDate}
		</Title3>
	);

	const searchQueryContent = (
		<Body2>
			{searchQuery.noOfPassengers} | {searchQuery.flightClass}
		</Body2>
	);

	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<TextContainer title={searchQueryTitle} content={searchQueryContent} />
			<ListOfItems />
		</View>
	);
}

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		flightCompany: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		flightName: "First searchResultCard",
		duration: "6h 30m",
		date: "28 Apr",
		launchLocation: "Earth",
		price: "1000",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		flightCompany: "Second searchResultCard",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		flightCompany: "Third searchResultCard",
	},
];

const SearchResultCard = ({ flightCompany }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{flightCompany}</Text>
	</View>
);

const ListOfItems = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={(item) => <SearchResultCard title={item.flightCompany} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 10,
	},
});
