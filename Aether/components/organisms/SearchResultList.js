import { Divider } from "react-native-paper";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import SearchResultCard from "../molecules/SearchResultCard";

const SearchResultList = ({ data }) => {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={{
					width: "100%",
					paddingLeft: 10,
					paddingRight: 10,
				}}
				data={data}
				renderItem={({ item }) => <SearchResultCard result={item} />}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => <Divider style={{ margin: 12 }} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "95%",
		padding: 10,
		marginTop: 10,
		justifyContent: "center",
	},
});

export default SearchResultList;
