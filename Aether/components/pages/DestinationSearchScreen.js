import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import IconButton from "../atoms/buttons/IconButton";

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
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter start location"
        value={isFlipped ? endLocation : startLocation}
        onChangeText={(text) =>
          isFlipped ? setEndLocation(text) : setStartLocation(text)
        }
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Enter end location"
        value={isFlipped ? startLocation : endLocation}
        onChangeText={(text) =>
          isFlipped ? setStartLocation(text) : setEndLocation(text)
        }
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <IconButton icon={"swap-vertical"} size={25} onPress={handleFlip} />

      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default DestinationSearchScreen;
