import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Animated,
	Easing,
} from "react-native";
import React from "react";
import Body1 from "../../atoms/text/Body1";
import Title1 from "../../atoms/text/Title1";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
	const translateYImage = new Animated.Value(40);

	Animated.timing(translateYImage, {
		toValue: 0,
		duration: 1000,
		useNativeDriver: true,
		easing: Easing.bounce,
	}).start();

	return (
		<View style={styles.container}>
			<Image source={item.img} resizeMode="contain" style={styles.image} />
			<View style={styles.content}>
				<Title1 style={styles.title}>{item.title}</Title1>
				<Body1 style={styles.description}>{item.description}</Body1>
			</View>
		</View>
	);
};

export default SlideItem;

const styles = StyleSheet.create({
	container: {
		width,
		height,
		alignItems: "center",
	},
	image: {
		flex: 0.7,
		width: "100%",
	},
	content: {
		flex: 0.3,
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		// fontWeight: "bold",
		// color: "#333",
	},
	description: {
		paddingHorizontal: 32,
		// color: "#333",
		textAlign: "center",
	},
	price: {
		fontSize: 32,
		fontWeight: "bold",
	},
});
