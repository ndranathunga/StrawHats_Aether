import { useEffect, useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import SearchResultList from "../organisms/SearchResultList";
import IconButton from "../atoms/buttons/IconButton";
import { View, StyleSheet } from "react-native";

export default function SearchResultsScreen({ route, navigation }) {
	const [searchQuery, setSearchQuery] = useState({
		startingLocation: "Earth",
		destination: "Mars",
		departureDate: "28 Apr",
		noOfPassengers: "3 Travelers",
		flightClass: "Economy",
	});

	const [filters, setFilters] = useState({
		company: "any",
		spaceshipType: "any",
		maxPrice: 1000000,
		sortType: "price-lowest",
	});

	const [searchResults, setSearchResults] = useState(SEARCH_RESULT_DATA);
	const [searchResultsFiltered, setSearchResultsFiltered] =
		useState(SEARCH_RESULT_DATA);

	useEffect(() => {
		if (route.params) {
			console.log(route);
			const { filters1 } = route.params;
			setFilters(filters1);
		}

		setSearchResultsFiltered(SEARCH_RESULT_DATA);

		// filter by company
		if (filters.company !== "any") {
			console.log("filtering by company");
			setSearchResultsFiltered((prev) => {
				return prev.filter((item) => {
					return item.flightCompanyCode === filters.company;
				});
			});
		}

		// filter by spaceship type
		if (filters.spaceshipType !== "any") {
			setSearchResultsFiltered((prev) => {
				return prev.filter((item) => {
					return item.spaceshipType === filters.spaceshipType;
				});
			});
		}

		// filter by max price
		if (filters.maxPrice !== 1000000) {
			setSearchResultsFiltered((prev) => {
				return prev.filter((item) => {
					return item.price <= filters.maxPrice;
				});
			});
		}

		// sort by price
		if (filters.sortType === "price-lowest") {
			setSearchResultsFiltered((prev) => {
				return prev.sort((a, b) => {
					return a.price - b.price;
				});
			});
		} else if (filters.sortType === "price-highest") {
			setSearchResultsFiltered((prev) => {
				return prev.sort((a, b) => {
					return b.price - a.price;
				});
			});
		} else if (filters.sortType === "duration-lowest") {
			setSearchResultsFiltered((prev) => {
				return prev.sort((a, b) => {
					return a.duration - b.duration;
				});
			});
		} else if (filters.sortType === "duration-highest") {
			setSearchResultsFiltered((prev) => {
				return prev.sort((a, b) => {
					return b.duration - a.duration;
				});
			});
		}
	}, [route]);

	return (
		<CenterViewContainer>
			<View style={styles.container}>
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

			<SearchResultList data={searchResultsFiltered} />
		</CenterViewContainer>
	);
}

const SEARCH_RESULT_DATA = [
	{
		id: "1",
		flightCompany: "Blue Origin",
		flightCompanyCode: "blue-origin",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "New Shepard Mark V",
		duration: "7 mon 12 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: 280000,
	},
	{
		id: "2",
		flightCompany: "SpaceX",
		flightCompanyCode: "space-x",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "Falcon LVI",
		duration: "9 mon 2 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: 160000,
	},
	{
		id: "3",
		flightCompany: "Virgin Galactic",
		flightCompanyCode: "virgin-galactic",
		flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
		flightName: "SpaceShipTwelve",
		duration: "3 mon 12 days",
		date: "28 Apr 2023",
		launchLocation: "Kennedy Space Center, Florida, USA",
		price: 340000,
	},
];

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
