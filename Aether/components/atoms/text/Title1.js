import { Text } from "react-native-paper";
import textStyles from "./Styles";

const Title1 = ({ children, style }) => {
	return <Text style={{ ...textStyles.title1, ...style }}>{children}</Text>;
};

export default Title1;
