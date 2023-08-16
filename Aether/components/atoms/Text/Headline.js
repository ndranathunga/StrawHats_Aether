import { Text } from "react-native";
import textStyles from "./Styles";

const Headline = (props) => {
	return <Text style={textStyles.headline}>{props.children}</Text>;
};

export default Headline;
