import { Text } from "react-native-paper";
import textStyles from "./Styles";

const Body1 = (props) => {
	return <Text style={textStyles.body1}>{props.children}</Text>;
};

export default Body1;
