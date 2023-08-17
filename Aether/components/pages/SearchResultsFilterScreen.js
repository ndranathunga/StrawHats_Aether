import { useState } from "react";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchQueryCard from "../molecules/SearchQueryCard";
import { StyleSheet, View } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import Title4 from "../atoms/text/Title4";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchResultsFilterScreen({ route, navigation }) {
	const { filters, searchQuery } = route.params;
	const [value, setValue] = useState("first");

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
			<Card style={styles.radioGroupCard}>
				<RadioButton.Group
					onValueChange={(newValue) => setValue(newValue)}
					value={value}
				>
					<View style={styles.radioGroup}>
						<View style={styles.radioLabel}>
							<Icon name="arrow-up" style={styles.icon} size={15} />
							<Title4>Price - Lowest first</Title4>
						</View>
						<View style={styles.radioBtn}>
							<RadioButton value="price-lowest" />
						</View>
					</View>
					<View style={styles.radioGroup}>
						<Icon name="arrow-down" style={styles.icon} size={15} />
						<Title4>Price - Highest first</Title4>
						<RadioButton value="price-highest" />
					</View>
					<View style={styles.radioGroup}>
						<Icon name="stopwatch-outline" style={styles.icon} size={15} />
						<Title4>Travel duration - Lowest first</Title4>
						<RadioButton value="duration-lowest" />
					</View>
					<View style={styles.radioGroup}>
						<Icon name="calendar-outline" style={styles.icon} size={15} />
						<Title4>Departure date - Latest first</Title4>
						<RadioButton value="date-latest" />
					</View>
					<View style={styles.radioGroup}>
						<Icon name="location-outline" style={styles.icon} size={15} />
						<Title4>Closest to you</Title4>
						<RadioButton value="closest" />
					</View>
					<View style={styles.radioGroup}>
						<Icon name="stats-chart-outline" style={styles.icon} size={15} />
						<Title4>Most Popular</Title4>
						<RadioButton value="most-popular" />
					</View>
				</RadioButton.Group>
			</Card>
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
