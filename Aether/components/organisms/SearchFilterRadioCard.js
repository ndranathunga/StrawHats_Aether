import { StyleSheet } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import RadioGroupItem from "../molecules/RadioGroupItem";

const SearchFilterRadioCard = ({ value, setValue }) => {
	return (
		<Card style={styles.radioGroupCard}>
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
		</Card>
	);
};

const styles = StyleSheet.create({
	radioGroupCard: {
		margin: 10,
		padding: 10,
		width: "80%",
	},
});

export default SearchFilterRadioCard;
