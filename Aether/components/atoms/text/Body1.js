import { Text } from "react-native-paper";
import textStyles from "./Styles";

const Body1 = ({ children, style }) => {
	console.log(style);
	return <Text style={{ ...textStyles.body1, ...style }}>{children}</Text>;
};

export default Body1;
