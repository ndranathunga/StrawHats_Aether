import React, { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export const useBackground = () => {
	return useContext(BackgroundContext);
};

export const BackgroundProvider = ({ children }) => {
	const [backgroundColor, setBackgroundColor] = useState("defaultColor");
	const [backgroundImage, setBackgroundImage] = useState(null);

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
