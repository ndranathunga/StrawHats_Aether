import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import TextInputContainer from "../atoms/text-container/TextInputContainer";
import IconButton from "../atoms/buttons/IconButton";
import CustomButton from "../atoms/buttons/CustomButton";
import DestinationResults from "../molecules/DestinationResults";
import Title3 from "../atoms/text/Title3";

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
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label={"End"}
            value={isFlipped ? startLocation : endLocation}
            onChange={(text) =>
              isFlipped ? setStartLocation(text) : setEndLocation(text)
            }
            holderColor={"#E0E2EB"}
          />
        </View>
        <IconButton icon={"swap-vertical"} size={25} onPress={handleFlip} />
      </View>
      <Title3>we'll probably have to get rid of the submit button</Title3>
      <CustomButton title="Search" onPress={handleSearch} />
      <Title3>Results for "Mars"</Title3>

      <View style={styles.resultCards}>
        <DestinationResults />
      </View>
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
  formattedLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  resultCards: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
