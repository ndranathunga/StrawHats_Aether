import { StyleSheet, View } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import RadioGroupItem from "../molecules/RadioGroupItem";
import Title3 from "../atoms/text/Title3";

const SearchFilterRadioCard = ({ value, setValue }) => {
	return (
		<>
			<View style={styles.title}>
				<Title3 style={styles.cardLabel}>Sort</Title3>
			</View>

			<Card style={styles.radioGroupCard} mode="outlined">
				<Card.Content>
					<RadioButton.Group
						onValueChange={(newValue) => setValue(newValue)}
						value={value}
					>
						<RadioGroupItem
							icon={"arrow-up"}
							label="Price - Lowest first"
							value={"price-lowest"}
						/>
						<RadioGroupItem
							icon={"arrow-down"}
							label="Price - Highest first"
							value={"price-highest"}
						/>
						<RadioGroupItem
							icon={"stopwatch-outline"}
							label="Travel duration - Lowest first"
							value={"duration-lowest"}
						/>
						<RadioGroupItem
							icon={"calendar-outline"}
							label="Departure date - Latest first"
							value={"date-latest"}
						/>
						<RadioGroupItem
							icon={"location-outline"}
							label="Closest to you"
							value={"closest"}
						/>
						<RadioGroupItem
							icon={"stats-chart-outline"}
							label="Most Popular"
							value={"most-popular"}
						/>
					</RadioButton.Group>
				</Card.Content>
			</Card>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		display: "block",
		textAlign: "left",
		marginBottom: 5,
		marginTop: 10,
		width: "90%",
	},
	radioGroupCard: {
		marginHorizontal: 10,
		marginBottom: 10,
		// padding: 10,
		width: "90%",
		backgroundColor: "rgba(0, 0, 0, 0.70)",
		borderColor: "rgba(255, 255, 255, 0.40)",
	},
	cardLabel: {
		display: "block",
		textAlign: "left",
	},
});

export default SearchFilterRadioCard;
