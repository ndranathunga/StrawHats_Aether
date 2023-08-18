import { useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import { StyleSheet, View } from "react-native";
import { Card, RadioButton } from "react-native-paper";

import SearchFilterRadioCard from "../organisms/SearchFilterRadioCard";

import SelectInput from "../molecules/SelectInput";

export default function SearchResultsFilterScreen({ route, navigation }) {
	const { filters, searchQuery } = route.params;
	const [value, setValue] = useState("price-lowest");

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
			<SearchFilterRadioCard value={value} setValue={setValue} />
			<SelectInput />
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
