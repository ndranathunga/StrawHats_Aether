import * as React from "react";
import { IconButton as IconBtn } from "react-native-paper";

const IconButton = ({
	icon,
	size = 20,
	onPress = () => {
		return;
	},
	style,
}) => {
	return (
		<IconBtn
			style={{ margin: 10, ...style }}
			icon={icon}
			size={size}
			onPress={() => onPress()}
		/>
	);
};

export default IconButton;
