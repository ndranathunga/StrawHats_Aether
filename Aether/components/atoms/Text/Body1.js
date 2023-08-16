import { Text } from "react-native";
import textStyles from "./Styles";

const Body1 = (props) => {
	return <Text style={textStyles.body1}>{props.children}</Text>;
};

export default Body1;
