import React, { createContext, useContext, useState } from "react";

const TripContext = createContext();

export const useTrip = () => {
	return useContext(TripContext);
};



export const TripProvider = ({ children }) => {
	const [backgroundColor, setTripColor] = useState("black");
	const [backgroundImage, setTripImage] = useState(items[0].image);
	const [imageList, setImageList] = useState(items);

	const setTrip = (color, image) => {
		setTripColor(color);
		setTripImage(image);
	};

	return (
		<TripContext.Provider
			value={{ backgroundColor, backgroundImage, setTrip, imageList }}
		>
			{children}
		</TripContext.Provider>
	);
};
