import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../components/pages/HomeScreen";
import MyFlightsScreen from "../components/pages/MyFlightsScreen";
import ExploreScreen from "../components/pages/ExploreScreen";
import ProfileScreen from "../components/pages/ProfileScreen";
import PersonalInfoScreen from "../components/pages/PersonalInfoScreen";

// Theming
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import {
	MD3DarkTheme,
	adaptNavigationTheme,
	PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";

import customPallete from "./pallete.json";
import CustomNavigationBar from "./CustomNavigationBar";

import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const { DarkTheme } = adaptNavigationTheme({
	reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const theme = {
	...CombinedDarkTheme,
	colors: customPallete.colors, // Copy it from the color codes scheme and then use it here
};

//Screen names
const homeName = "Home";
const FlightsName = "My Flights";
const ExploreName = "Explore";
const profileName = "Profile";
const personalInfoName = "Personal Info";

const MainTabNavigator = () => (
	<Tab.Navigator
		initialRouteName={homeName}
		screenOptions={({ route }) => ({
			header: (props) => <CustomNavigationBar {...props} />,
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;
				let rn = route.name;

				if (rn === homeName) {
					iconName = focused ? "home" : "home-outline";
				} else if (rn === FlightsName) {
					iconName = focused ? "paper-plane" : "paper-plane-outline";
				} else if (rn === ExploreName) {
					iconName = focused ? "compass-sharp" : "compass-outline";
				} else if (rn === profileName) {
					iconName = focused ? "person" : "person-outline";
				}

				// You can return any component that you like here!
				return <Ionicons name={iconName} size={size} color={color} />;
			},

			// tabBarActiveTintColor: "tomato",
			// tabBarInactiveTintColor: "grey",
			// tabBarLabelStyle: {
			// 	paddingBottom: 10,
			// 	fontSize: 10,
			// },
			// tabBarStyle: [
			// 	{
			// 		paddingTop: 10,
			// 		display: "flex",
			// 	},
			// 	null,
			// ],
		})}
	>
		<Tab.Screen name={homeName} component={HomeScreen} />
		<Tab.Screen name={FlightsName} component={MyFlightsScreen} />
		<Tab.Screen name={ExploreName} component={ExploreScreen} />
		<Tab.Screen name={profileName} component={ProfileScreen} />
	</Tab.Navigator>
);

function MainContainer() {
	return (
		<PaperProvider theme={theme}>
			<NavigationContainer theme={theme}>
				<Stack.Navigator
					initialRouteName="Main"
					screenOptions={{
						header: (props) => <CustomNavigationBar {...props} />,
					}}
				>
					<Stack.Screen
						name="Main"
						component={MainTabNavigator}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name={personalInfoName}
						component={PersonalInfoScreen}
						options={{ tabBarVisible: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}

export default MainContainer;

AppRegistry.registerComponent(appName, () => Main);
