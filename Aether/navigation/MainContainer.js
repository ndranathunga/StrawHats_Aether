import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import { CommonActions } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";

// Screens
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
import NotificaitonsScreen from "../components/pages/NotificationsScreen";

// Theming
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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const { DarkTheme } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

const fontConfig = {
  fontFamily: "Inter-Regular",
};

const theme = {
  ...CombinedDarkTheme,
  colors: customPallete.colors,
  fonts: configureFonts({ config: fontConfig }),
};

//Screen names
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
const notificationsName = "Notifications";

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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default MainContainer;

AppRegistry.registerComponent(appName, () => Main);
