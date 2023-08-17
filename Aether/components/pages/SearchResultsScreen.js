import { useState } from "react";
import {
	View,
	SafeAreaView,
	FlatList,
	StyleSheet,
	StatusBar,
} from "react-native";

import TextContainer from "../atoms/text-container/TextContainer";
import Title3 from "../atoms/text/Title3";
import Title4 from "../atoms/text/Title4";
import Body1 from "../atoms/text/Body1";
import Body2 from "../atoms/text/Body2";

import { Card, Text, Divider, Avatar, Button } from "react-native-paper";

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
		id: "1",
		flightCompany: "Blue Origin",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "New Shepard Mark V",
		duration: "7 mon 12 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: "$280,000",
	},
	{
		id: "2",
		flightCompany: "SpaceX",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "Falcon LVI",
		duration: "9 mon 2 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: "$160,000",
	},
	{
		id: "3",
		flightCompany: "Virgin Galactic",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "SpaceShipTwelve",
		duration: "3 mon 12 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: "$340,000",
	},
];

const SearchResultCard = ({ result }) => (
	<Card>
		<Card.Content>
			<View
				style={{
					flexDirection: "row",
					marginBottom: 10,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						flex: 3,
					}}
				>
					<Avatar.Image
						size={40}
						style={{ justifyContent: "center" }}
						source={require("../../assets/images/flight-companies/blue-origin.jpeg")}
					/>
					<View style={{ marginLeft: 5, justifyContent: "center" }}>
						<Title4>{result.flightCompany}</Title4>
						<Body1>{result.flightName}</Body1>
					</View>
				</View>

				<View
					style={{
						flex: 3,
						alignItems: "flex-end",
						justifyContent: "center",
					}}
				>
					<Body1>{result.duration}</Body1>
				</View>
			</View>
			<Divider />
			<View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}>
				<View style={{ flex: 4 }}>
					<Title3>{result.date}</Title3>
					<Body2>{result.launchLocation}</Body2>
				</View>
				<View
					style={{
						flex: 2,
						alignItems: "flex-end",
						justifyContent: "center",
					}}
				>
					<Title3>{result.price}</Title3>
				</View>
			</View>
		</Card.Content>
		<Button
			onPress={() => console.log("Hello")}
			mode="outlined"
			theme={{ roundness: 100 }}
			style={{
				width: "100%",
				borderRadius: 0,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0,
				borderBottomRightRadius: 10,
				borderBottomLeftRadius: 10,
			}}
			labelStyle={{
				paddingBottom: 5,
				paddingTop: 5,
			}}
			contentStyle={{
				borderRadius: 0,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0,
				borderBottomRightRadius: 10,
				borderBottomLeftRadius: 10,
			}}
		>
			Book Flight
		</Button>
	</Card>
);

const ListOfItems = () => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={{
					width: "100%",
					paddingLeft: 10,
					paddingRight: 10,
				}}
				data={DATA}
				renderItem={({ item }) => <SearchResultCard result={item} />}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => <Divider style={{ margin: 12 }} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "95%",
		padding: 10,
		marginTop: 10,
		justifyContent: "center",
	},
});
