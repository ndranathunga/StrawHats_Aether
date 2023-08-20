// Import necessary modules and components
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import Title3 from "../components/atoms/text/Title3";
import Title1 from "../components/atoms/text/Title1";
import { View, StyleSheet, Dimensions } from "react-native";

// Get the device dimensions
const { width, height } = Dimensions.get("window");

// Define the CustomNavigationBar component
export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}) {
  // Determine the title based on the route name
  var title = getHeaderTitle(options, route.name);

  // Default header style
  var headerStyle = styles.header;

  // Check if the route is the home screen
  const home = route.name === "Home";

  // If on the home screen, customize the title and header style
  if (home) {
    title = (
      <View style={styles.homeTitle}>
        <Title3>Hello there, John</Title3>
        <Title1>Let's Explore Space</Title1>
      </View>
    );
    headerStyle = styles.headerHome;
  }

  // Render the custom navigation bar
  return (
    <Appbar.Header style={headerStyle}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title={title}
        style={styles.appBarContent}
        titleStyle={styles.appBarTitle}
      />
      {home ? (
        <Appbar.Action
          icon="bell-outline"
          style={styles.appBarAction}
          onPress={() => navigation.navigate("Notifications")}
        />
      ) : null}
    </Appbar.Header>
  );
}

// Define styles using StyleSheet
const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    position: "absolute",
    top: (10 / 100) * height,
    left: 0,
    right: 0,
  },
  headerHome: {
    backgroundColor: "transparent",
    position: "absolute",
    top: (10 / 100) * height,
    left: 0,
    right: 0,
  },
  appBarContent: {
    marginLeft: 0,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: -1,
  },
  appBarTitle: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "Inter-SemiBold",
  },
  appBarAction: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10,
  },
  homeTitle: { padding: 20 },
});
