import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import DestinationSearchBlock from "../organisms/DestinationSearchBlock";

const DestinationSearchScreen = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSearch = () => {
    // Perform your search logic here using startLocation and endLocation
    console.log("Searching for directions:", startLocation, endLocation);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <DestinationSearchBlock/>
  );
};

export default DestinationSearchScreen;
