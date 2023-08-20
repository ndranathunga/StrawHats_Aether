// Import necessary modules and components
import { View } from "react-native";
import MainContainer from "./navigation/MainContainer";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BackgroundProvider } from "./context/BackgroundContext";
import { StatusBar } from "expo-status-bar";
import { TripProvider } from "./context/TripContext";

// Prevent the app from auto-hiding the splash screen
SplashScreen.preventAutoHideAsync();

// Define the main App component
export default function App() {
  // Load custom fonts using useFonts hook
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

  // Callback function to hide the splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If fonts are not yet loaded, return null (temporary)
  if (!fontsLoaded) {
    return null;
  }

  // Return the main app structure
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar translucent backgroundColor="transparent" />
      <TripProvider>
        <BackgroundProvider>
          <MainContainer />
        </BackgroundProvider>
      </TripProvider>
    </View>
  );
}
