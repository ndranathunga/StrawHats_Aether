import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
import Title3 from "../components/atoms/text/Title3";
import Title1 from "../components/atoms/text/Title1";
import { View, StyleSheet } from "react-native";

export default function CustomNavigationBar({
	navigation,
	route,
	options,
	back,
}) {
	var title = getHeaderTitle(options, route.name);
	var headerStyle = styles.header;

	if (title === "Home") {
		title = (
			<View style={{ padding: 20 }}>
				<Title3>Hello there, John</Title3>
				<Title1>Let's Explore Space</Title1>
			</View>
		);
		headerStyle = { ...headerStyle, height: 100 };
	}

	return (
		<Appbar.Header style={headerStyle}>
			{back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
			<Appbar.Content
				title={title}
				style={styles.appBarContent}
				titleStyle={styles.appBarTitle}
			/>
		</Appbar.Header>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "transparent",
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
});
