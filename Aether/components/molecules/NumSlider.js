import Slider from "@react-native-community/slider";
import { View, StyleSheet } from "react-native";
import Title3 from "../atoms/text/Title3";
import Body2 from "../atoms/text/Body2";

const NumSlider = ({
	label,
	minValue,
	maxValue,
	value,
	setValue,
	valueLabel,
	step,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.label}>
				<Title3>{label}</Title3>
			</View>

			<Slider
				style={styles.slider}
				minimumValue={minValue}
				maximumValue={maxValue}
				minimumTrackTintColor="#FFFFFF"
				maximumTrackTintColor="#000000"
				thumbTintColor="#FFFFFF"
				value={value}
				onValueChange={setValue}
				step={step}
			/>

			<Body2 style={styles.value}>{valueLabel}</Body2>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		width: "80%",
	},
	label: { width: "80%" },
	slider: { width: "100%", height: 40 },
	value: { display: "block", textAlign: "center" },
});

export default NumSlider;
