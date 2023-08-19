import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const useBackground = () => {
	return useContext(BackgroundContext);
};

const items = [
	{
		id: "001",
		image: require("../assets/images/backgrounds/earth-bg-temp.jpeg"),
	},
	{
		id: "002",
		image: require("../assets/images/backgrounds/mars-bg-temp.jpeg"),
	},
];

export const BackgroundProvider = ({ children }) => {
	const [backgroundColor, setBackgroundColor] = useState("black");
	const [backgroundImage, setBackgroundImage] = useState(items[0].image);

	const setBackground = (color, image) => {
		setBackgroundColor(color);
		setBackgroundImage(image);
	};

	return (
		<BackgroundContext.Provider
			value={{ backgroundColor, backgroundImage, setBackground }}
		>
			{children}
		</BackgroundContext.Provider>
	);
};