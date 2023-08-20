import React, { createContext, useContext, useState } from "react";

// Create the context
const TripContext = createContext();

// Define the default values
const defaultTripValues = {
  startLocation: "",
  endLocation: "",
  departureDate: "",
  arrivalDate: "",
  passengers: 0,
};

// Create a custom hook to access the TripContext
export function useTripContext() {
  return useContext(TripContext);
}

// Create the TripProvider component
export function TripProvider({ children }) {
  const [tripData, setTripData] = useState(defaultTripValues);

  const updateStartLocation = (newStartLocation) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      startLocation: newStartLocation,
    }));
  };

  const updateEndLocation = (newEndLocation) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      endLocation: newEndLocation,
    }));
  };
  const updateDepartureDate = (newDepartureDate) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      departureDate: newDepartureDate,
    }));
  };
  const updateArrivalDate = (newArrivalDate) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      arrivalDate: newArrivalDate,
    }));
  };

  const updatePassengers = (newPassengers) => {
    setTripData((prevTripData) => ({
      ...prevTripData,
      passengers: newPassengers,
    }));
  };

  const tripContextValue = {
    ...defaultTripValues,
    // You can add other methods or state here if needed
  };

  return (
    <TripContext.Provider value={tripContextValue}>
      {children}
    </TripContext.Provider>
  );
}
