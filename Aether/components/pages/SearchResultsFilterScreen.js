import { useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import { StyleSheet, View } from "react-native";
import { Card, RadioButton } from "react-native-paper";

import SearchFilterRadioCard from "../organisms/SearchFilterRadioCard";

import SelectInput from "../molecules/SelectInput";

export default function SearchResultsFilterScreen({ route, navigation }) {
	const { filters, searchQuery } = route.params;
	const [filterValue, setFilterValue] = useState("price-lowest");
	const [companyValue, setCompanyValue] = useState("any");
	const [spaceshipTypeValue, setSpaceshipTypeValue] = useState("any");
	const [maxPriceValue, setMaxPriceValue] = useState(1000000);

	const [companyItems, setCompanyItems] = useState([
		{ label: "Any", value: "any" },
		{ label: "Space X", value: "space-x" },
		{ label: "Blue Origin", value: "blue-origin" },
		{ label: "Virigin Galactic", value: "virgin-galactic" },
	]);

	const [spaceshipTypeItems, setSpaceshipTypeItems] = useState([
		{ label: "Any", value: "any" },
		{ label: "Rocket", value: "rocket" },
		{ label: "Spaceplane", value: "spaceplane" },
		{ label: "Capsule", value: "capsule" },
	]);

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
			<SearchFilterRadioCard value={filterValue} setValue={setFilterValue} />
			<SelectInput
				label={"Company"}
				value={companyValue}
				setValue={setCompanyValue}
				items={companyItems}
			/>
			<SelectInput
				label={"Spaceship Type"}
				value={spaceshipTypeValue}
				setValue={setSpaceshipTypeValue}
				items={spaceshipTypeItems}
			/>
		</CenterViewContainer>
	);
}

const styles = StyleSheet.create({
	radioGroupCard: {
		margin: 10,
		padding: 10,
		width: "80%",
	},
	radioGroup: {
		flexDirection: "row",
		alignItems: "center",
	},
	radioLabel: { flex: 5, flexDirection: "row", alignItems: "center" },
	radioBtn: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
	icon: {
		margin: 10,
		color: "white",
	},
});
