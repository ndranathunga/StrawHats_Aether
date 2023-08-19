import { useBackground } from "../../context/BackgroundContext";
import { ImageBackground, StyleSheet } from "react-native";

const DynamicBackground = ({ children, ...props }) => {
	const { backgroundColor, backgroundImage, setBackground } = useBackground();

	return (
		<ImageBackground
			style={styles.imageContainer}
			imageStyle={styles.image}
			source={backgroundImage}
		>
			{children}
		</ImageBackground>
	);
};

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
	},
});

export default DynamicBackground;
