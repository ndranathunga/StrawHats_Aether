import React, { createContext, useContext, useState } from "react";

// Create a context for managing background-related data
const BackgroundContext = createContext();

// Custom hook to access the background context
export const useBackground = () => {
	return useContext(BackgroundContext);
};

// Array of background items with images
const items = [
	{
		id: "001",
		image: require("../assets/images/backgrounds/earth-bg-temp.jpeg"),
	},
	{
		id: "002",
		image: require("../assets/images/backgrounds/mars-bg-temp.jpeg"),
	},
	{
		id: "003",
		image: require("../assets/images/backgrounds/black-hole-bg-temp.jpeg"),
	},
	{
		id: "004",
		image: require("../assets/images/backgrounds/mars-bg-1.jpeg"),
	},
	{
		id: "005",
		image: require("../assets/images/backgrounds/mars-bg-2.jpeg"),
	},
];

// BackgroundProvider component to provide background data to its children
export const BackgroundProvider = ({ children }) => {
	// State variables to manage background data
	const [backgroundColor, setBackgroundColor] = useState("black");
	const [backgroundImage, setBackgroundImage] = useState(items[0].image);
	const [imageList, setImageList] = useState(items);

	// Function to set the background color and image
	const setBackground = (color, image) => {
		setBackgroundColor(color);
		setBackgroundImage(image);
	};

	// Provide the background data through the context
	return (
		<BackgroundContext.Provider
			value={{ backgroundColor, backgroundImage, setBackground, imageList }}
		>
			{children}
		</BackgroundContext.Provider>
	);
};
