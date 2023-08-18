import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TextInputContainer from "../atoms/text-container/TextInputContainer";
import IconButton from "../atoms/buttons/IconButton";
import CustomButton from "../atoms/buttons/CustomButton";

const DestinationSearchBlock = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSearch = () => {
    // Perform your search logic here using startLocation and endLocation
    if (startLocation === "" || endLocation === "") {
      alert("Please enter a start and end location.");
    }
    if (isFlipped) {
      console.log("Searching for directions:", endLocation, startLocation);
    } else {
      console.log("Searching for directions:", startLocation, endLocation);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textAndFlip}>
        <View style={styles.justTextInput}>
          <TextInputContainer
            label={"Start"}
            value={isFlipped ? endLocation : startLocation}
            onChange={(text) =>
              isFlipped ? setEndLocation(text) : setStartLocation(text)
            }
          />
          <TextInputContainer
            label={"End"}
            value={isFlipped ? startLocation : endLocation}
            onChange={(text) =>
              isFlipped ? setStartLocation(text) : setEndLocation(text)
            }
          />
        </View>
        <IconButton icon={"swap-vertical"} size={25} onPress={handleFlip} />
      </View>
      <CustomButton title="Search" onPress={handleSearch} />
    </View>
  );
};

export default DestinationSearchBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
  textAndFlip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  justTextInput: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
