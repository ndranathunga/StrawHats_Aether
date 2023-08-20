import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Animated,
	Easing,
	ImageBackground,
} from "react-native";
import React from "react";
import Body1 from "../../atoms/text/Body1";
import Title1 from "../../atoms/text/Title1";
import logo from "../../../assets/images/text-logo.png";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
	const translateYImage = new Animated.Value(40);
	const itemID = item.id;
	const navigation = useNavigation();

	Animated.timing(translateYImage, {
		toValue: 0,
		duration: 1000,
		useNativeDriver: true,
		easing: Easing.bounce,
	}).start();

	return (
		<ImageBackground
			source={item.img}
			resizeMode="cover"
			imageStyle={styles.image}
		>
			<View style={styles.container}>
				<View
					style={{
						flex: 0.5,
						alignItems: "flex-start",
						justifyContent: "flex-start",
					}}
				>
					<Image
						source={logo}
						style={{
							// display: "block",
							position: "absolute",
							top: 80,
							left: 30,
						}}
					></Image>
					<Button
						mode="contained"
						onPress={() => {
							navigation.navigate("Login");
						}}
						style={{
							display: "block",
							position: "absolute",
							top: 65,
							right: 30,
							backgroundColor: "white",
						}}
					>
						{itemID === 4 ? "Get Started >" : "Skip"}
					</Button>
				</View>
				<View style={styles.content}>
					<Title1 style={styles.title}>{item.title}</Title1>
					<Body1 style={styles.description}>{item.description}</Body1>
				</View>
			</View>
		</ImageBackground>
	);
};

export default SlideItem;

const styles = StyleSheet.create({
	container: {
		width,
		height,
		// alignItems: "center",
		flexDirection: "column",
	},
	image: {
		// flex: 0.7,
		// width: "100%",
		opacity: 0.8,
	},
	content: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center",
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
