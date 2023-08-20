import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ImageBackground,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({ item, index }) => {
	return (
		<View style={{ alignItems: "flex-end", justifyContent: "center" }}>
			<ImageBackground
				source={item.image}
				//   source={ require("../../../assets/images/backgrounds/mars-bg-temp.jpeg" )}
				style={styles.image}
				imageStyle={styles.imageStyle}
			>
				<View style={styles.container} key={index}>
					<Text style={styles.header}>{item.title}</Text>
					<Text style={styles.body}>{item.body}</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		height: 220,
		width: ITEM_WIDTH,
		overflow: "hidden", // Prevent content overflow
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 10,
		alignItems: "flex-start",
		justifyContent: "flex-end",
		paddingBottom: 10,
	},
	image: {
		flex: 1,
		// justifyContent: "flex-end", // Center content vertically
		alignItems: "flex-start", // Center content horizontally
		borderRadius: 10,
	},
	imageStyle: {
		opacity: 0.85, // Adjust the image opacity if needed
		borderRadius: 10,
	},
	header: {
		fontSize: 16,
		color: "white",
		textAlign: "left",
		marginLeft: 10, // Align header towards the left
		fontFamily: "Inter-Bold",
	},
	body: {
		fontSize: 12,
		// fontWeight: "bold",
		color: "#B7B7B7",
		textAlign: "left",
		marginLeft: 10, // Align body towards the left

		fontFamily: "Inter-Regular",
		paddingRight: 5,
	},
});

export default CarouselCardItem;
