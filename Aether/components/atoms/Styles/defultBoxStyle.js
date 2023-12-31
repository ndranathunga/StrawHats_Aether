import { StyleSheet } from "react-native";

export const defultBoxStyle = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0, 0, 0, 0.25)",
		borderRadius: 7,
		borderWidth: 0.5,
		borderColor: "rgba(255, 255, 255, 0.4)",
		overflow: "hidden",
		shadowColor: "white",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 7,
	},
	sizes: {
		flex: 1,
		margin: 20,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
	},
});
