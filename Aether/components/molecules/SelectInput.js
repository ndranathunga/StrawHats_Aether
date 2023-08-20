import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Title3 from "../atoms/text/Title3";

function SelectInput({ label, value, setValue, items }) {
	const [open, setOpen] = useState(false);
	const [selectItems, setSelectItems] = useState(items);

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Title3>{label}</Title3>
			</View>

			<DropDownPicker
				open={open}
				value={value}
				items={selectItems}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setSelectItems}
				theme="DARK"
				style={styles.selectBox}
				labelStyle={styles.selectLabel}
				dropDownContainerStyle={styles.selectDropdown}
				textStyle={styles.selectText}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		marginVertical: 10,
	},
	title: {
		marginBottom: 5,
	},
	selectBox: {
		borderColor: "rgba(255, 255, 255, 0.4)",
		backgroundColor: "rgba(0, 0, 0, 0.70)",
		borderRadius: 10,
	},
	selectLabel: {
		textAlign: "center",
	},
	selectDropdown: {
		backgroundColor: "#333333",
		zIndex: 100000,
	},
	selectText: {
		fontSize: 12,
		fontFamily: "Inter-Regular",
	},
});

export default SelectInput;
