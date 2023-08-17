import { View } from "react-native";
import MainContainer from "./navigation/MainContainer";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
		"Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
		"Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
		"Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
		"Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
		"Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
		"Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
		"Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
		"Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<MainContainer />
		</View>
	);
}
