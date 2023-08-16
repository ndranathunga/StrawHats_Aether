import { Text } from "react-native";
import textStyles from "./Styles";

const Title3 = (props) => {
	return <Text style={textStyles.title3}>{props.children}</Text>;
};

export default Title3;
