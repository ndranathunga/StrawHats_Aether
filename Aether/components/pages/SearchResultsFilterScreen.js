import { useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import IconButton from "../atoms/buttons/IconButton";
import { View } from "react-native";

export default function SearchResultsFilterScreen({ navigation }) {
	const [searchQuery, setSearchQuery] = useState({
		startingLocation: "Earth",
		destination: "Mars",
		departureDate: "28 Apr",
		noOfPassengers: "3 Travelers",
		flightClass: "Economy",
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
			</View>
		</CenterViewContainer>
	);
}
