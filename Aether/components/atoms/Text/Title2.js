import { Text } from "react-native-paper";
import textStyles from "./Styles";

const Title2 = (props) => {
	return <Text style={textStyles.title2}>{props.children}</Text>;
};

export default Title2;
