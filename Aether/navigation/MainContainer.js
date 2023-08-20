// Import necessary modules and components
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

// Import screens
import HomeScreen from "../components/pages/HomeScreen";
import MyFlightsScreen from "../components/pages/MyFlightsScreen";
import ExploreScreen from "../components/pages/ExploreScreen";
import ProfileScreen from "../components/pages/ProfileScreen";
import PersonalInfoScreen from "../components/pages/PersonalInfoScreen";
import SearchResultsScreen from "../components/pages/SearchResultsScreen";
import ChoosePodScreen from "../components/pages/ChoosePodScreen";
import DatePickerScreen from "../components/pages/DatePickerScreen";
import DestinationSearchScreen from "../components/pages/DestinationSearchScreen";
import SearchResultsFilterScreen from "../components/pages/SearchResultsFilterScreen";
import NebulaScreen from "../components/pages/NebulaScreen";
import SelectPassengersScreen from "../components/pages/SelectPassengersScreen";
import HelpScreen from "../components/pages/HelpScreen";
import NotificaitonsScreen from "../components/pages/NotificationsScreen";
import LoginScreen from "../components/pages/LoginScreen";
import RegisterScreen from "../components/pages/RegisterScreen";

import PaymentsScreen from "../components/pages/PaymentsScreen";
import BoardingPassScreen from "../components/pages/BoardingPassScreen";

// Import theming components
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import {
  MD3DarkTheme,
  adaptNavigationTheme,
  PaperProvider,
  configureFonts,
} from "react-native-paper";
import merge from "deepmerge";

import customPallete from "./pallete.json";
import CustomNavigationBar from "./CustomNavigationBar";

import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Adapt the dark theme for navigation
const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

// Combine dark themes
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

// Configure font
const fontConfig = {
  fontFamily: "Inter-Regular",
};

// Define the theme for the app
const theme = {
  ...CombinedDarkTheme,
  colors: customPallete.colors,
  fonts: configureFonts({ config: fontConfig }),
};

// Define screen names
const homeName = "Home";
const FlightsName = "My Flights";
const ExploreName = "Explore";
const profileName = "Profile";
const personalInfoName = "Personal Info";
const choosePodName = "Choose Pod";
const datePicker = "Date Picker";
const searchResultsName = "Search Results";
const destinationSearchName = "Destination Search";
const searchResultFilterName = "Sort & Filter";
const nebulaName = "Nebula";
const SelectPassengersName = "Select Passengers";
const HelpScreenName = "Help";
const notificationsName = "Notifications";
const loginName = "Login";
const registerName = "Register";

const paymentsName = "Payments";
const boardingPassName = "Boarding Pass";

// Define the main tab navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({ route }) => ({
      header: (props) => <CustomNavigationBar {...props} />,
    })}
    tabBar={({ navigation, state, descriptors, insets }) => (
      <BottomNavigation.Bar
        activeColor="white"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "black" }}
        style={{ backgroundColor: "black" }}
        // theme={{ colors: { secondaryContainer: "transparent" } }}
        navigationState={state}
        safeAreaInsets={insets}
        onTabPress={({ route, preventDefault }) => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          } else {
            navigation.dispatch({
              ...CommonActions.navigate(route.name, route.params),
              target: state.key,
            });
          }
        }}
        renderIcon={({ route, focused, color }) => {
          const { options } = descriptors[route.key];
          if (options.tabBarIcon) {
            return options.tabBarIcon({ focused, color, size: 24 });
          }

          return null;
        }}
        getLabelText={({ route }) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.title;

          return label;
        }}
      />
    )}
  >
    <Tab.Screen
      name={homeName}
      component={HomeScreen}
      options={{
        tabBarLabel: homeName,
        tabBarIcon: ({ color, size }) => {
          return <Icon name="home-outline" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name={FlightsName}
      component={MyFlightsScreen}
      options={{
        tabBarLabel: FlightsName,
        tabBarIcon: ({ color, size }) => {
          return <Icon name="paper-plane-outline" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name={ExploreName}
      component={ExploreScreen}
      options={{
        tabBarLabel: ExploreName,
        tabBarIcon: ({ color, size }) => {
          return <Icon name="compass-outline" size={size} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name={profileName}
      component={ProfileScreen}
      options={{
        tabBarLabel: profileName,
        tabBarIcon: ({ color, size }) => {
          return <Icon name="person-outline" size={size} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

// Define the main container of the app
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
          <Stack.Screen
            name={choosePodName}
            component={ChoosePodScreen}
            options={{ tabBarVisible: false }}
          />
          <Stack.Screen
            name={datePicker}
            component={DatePickerScreen}
            options={{ tabBarVisible: false }}
          />
          <Stack.Screen
            name={searchResultsName}
            component={SearchResultsScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={destinationSearchName}
            component={DestinationSearchScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={searchResultFilterName}
            component={SearchResultsFilterScreen}
            options={{ tabBarVisible: false }}
          />
          <Stack.Screen
            name={nebulaName}
            component={NebulaScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={SelectPassengersName}
            component={SelectPassengersScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={notificationsName}
            component={NotificaitonsScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={paymentsName}
            component={PaymentsScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
            name={boardingPassName}
            component={BoardingPassScreen}
            options={{ tabBarVisible: false }}
          />

          <Stack.Screen
						name={HelpScreenName}
						component={HelpScreen}
						options={{ tabBarVisible: false, headerShown: false }}
					/>
          <Stack.Screen
            name={loginName}
            component={LoginScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
          <Stack.Screen
            name={registerName}
            component={RegisterScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
            name={HelpScreenName}
            component={HelpScreen}
            options={{ tabBarVisible: false, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default MainContainer;

// Register the app component
AppRegistry.registerComponent(appName, () => Main);
