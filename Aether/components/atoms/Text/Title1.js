import { Text } from "react-native-paper";
import textStyles from "./Styles";

const Title1 = (props) => {
	return <Text style={textStyles.title1}>{props.children}</Text>;
};

export default Title1;
