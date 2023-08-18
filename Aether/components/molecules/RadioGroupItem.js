import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import Title4 from "../atoms/text/Title4";
import Icon from "react-native-vector-icons/Ionicons";

const RadioGroupItem = ({ icon, label, value }) => {
	return (
		<View style={styles.radioGroupItem}>
			<View style={styles.radioLabel}>
				<Icon name={icon} style={styles.icon} size={15} />
				<Title4>{label}</Title4>
			</View>
			<View style={styles.radioBtn}>
				<RadioButton value={value} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	radioGroupItem: {
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

export default RadioGroupItem;
