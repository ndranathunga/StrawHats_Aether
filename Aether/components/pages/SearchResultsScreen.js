import { useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import SearchResultList from "../organisms/SearchResultList";
import IconButton from "../atoms/buttons/IconButton";
import { View } from "react-native";

export default function SearchResultsScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState({
		startingLocation: "Earth",
		destination: "Mars",
		departureDate: "28 Apr",
		noOfPassengers: "3 Travelers",
		flightClass: "Economy",
	});

	const [filters, setFilters] = useState({
		company: "All",
		spaceshipType: "All",
		maxPrice: "All",
		sortType: "price-lowest",
	});

	return (
		<CenterViewContainer>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<SearchQueryCard query={searchQuery} />
				<IconButton
					icon={"filter"}
					size={25}
					onPress={() =>
						navigation.navigate("Sort & Filter", {
							filters: filters,
							searchQuery: searchQuery,
						})
					}
				/>
			</View>

			<SearchResultList data={SEARCH_RESULT_DATA} />
		</CenterViewContainer>
	);
}

const SEARCH_RESULT_DATA = [
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
