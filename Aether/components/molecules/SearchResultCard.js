import { Card, Divider, Avatar, Button } from "react-native-paper";
import Title3 from "../atoms/text/Title3";
import Title4 from "../atoms/text/Title4";
import Body1 from "../atoms/text/Body1";
import Body2 from "../atoms/text/Body2";
import { StyleSheet, View } from "react-native";

const SearchResultCard = ({ result }) => (
	<Card mode="outlined" style={styles.card}>
		<Card.Content>
			<View style={styles.cardHeader}>
				<View style={styles.headerLeft}>
					<Avatar.Image
						size={40}
						style={styles.avatar}
						source={require("../../assets/images/flight-companies/blue-origin.jpeg")}
					/>
					<View style={styles.flightDetails}>
						<Title4>{result.flightCompany}</Title4>
						<Body1>{result.flightName}</Body1>
					</View>
				</View>
				<View style={styles.headerRight}>
					<Body1>{result.duration}</Body1>
				</View>
			</View>
			<Divider />
			<View style={styles.cardContent}>
				<View style={styles.date}>
					<Title3>{result.date}</Title3>
					<Body2>{result.launchLocation}</Body2>
				</View>
				<View style={styles.price}>
					<Title3>{result.price}</Title3>
				</View>
			</View>
		</Card.Content>
		<Button
			onPress={() => console.log("Hello")}
			mode="outlined"
			theme={styles.btnTheme}
			style={styles.btn}
			labelStyle={styles.btnLabel}
			contentStyle={styles.btnContent}
		>
			Book Flight
		</Button>
	</Card>
);

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: "rgba(0, 0, 0, 0.70)",
		borderColor: "rgba(255, 255, 255, 0.40)",
	},
	cardHeader: {
		flexDirection: "row",
		marginBottom: 10,
	},
	cardContent: { flexDirection: "row", marginTop: 20, marginBottom: 20 },
	btnTheme: {
		roundness: 100,
	},
	headerLeft: {
		flexDirection: "row",
		flex: 3,
	},
	avatar: { justifyContent: "center" },
	flightDetails: { marginLeft: 5, justifyContent: "center" },
	headerRight: {
		flex: 3,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	date: { flex: 4 },
	price: {
		flex: 2,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	btn: {
		backgroundColor: "rgba(129, 194, 255, 0.25)",

		width: "100%",
		borderRadius: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	btnLabel: {
		color: "#fff",
		fontFamily: "Inter-SemiBold",
		paddingBottom: 5,
		paddingTop: 5,
	},
	btnContent: {
		borderRadius: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
});

export default SearchResultCard;
