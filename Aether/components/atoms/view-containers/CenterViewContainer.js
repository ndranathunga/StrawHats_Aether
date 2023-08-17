import { View, StyleSheet } from "react-native";

const CenterViewContainer = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});

export default CenterViewContainer;
