import { useBackground } from "../../context/BackgroundContext";
import {
	ImageBackground,
	StyleSheet,
	Dimensions,
	Text,
	View,
	Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import stars from "../../assets/images/stars.png";

const DynamicBackground = ({ children, staticBG = false }) => {
	const { backgroundColor, backgroundImage, setBackground } = useBackground();
	// (120deg, #001B2F 0.14%, #001125 7.00%, #000 28.86%, #000 99.98%, #443045 99.99%, #16151A 100%));
	const gradientBG = (
		<View style={styles.container}>
			<LinearGradient
				colors={["#001B2F", "#001125", "#000"]}
				style={styles.gradient}
			/>

			<View style={styles.starContainer}>
				<Image style={styles.starImage} source={stars} />
			</View>
			{children}
		</View>
	);

	const imageBG = (
		<ImageBackground
			style={styles.imageContainer}
			imageStyle={styles.image}
			source={backgroundImage}
		>
			{children}
		</ImageBackground>
	);

	return staticBG ? gradientBG : imageBG;
};

// Get screen heihgt and width
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 8,
		resizeMode: "cover",
		justifyContent: "center",
	},
	imageContainer: {
		flex: 1,
		justifyContent: "flex-end",
		borderRadius: 8,
		paddingTop: (15 / 100) * height,
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "black",
		paddingTop: (15 / 100) * height,
	},
	gradient: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 300,
	},
	starContainer: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: "flex-end",
	},
	starImage: {
		flex: 1,
		width: "100%",
		opacity: 0.35,
	},
});

export default DynamicBackground;
