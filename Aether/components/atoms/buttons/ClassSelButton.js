import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Title3 from "../text/Title2";
import { defultBoxStyle } from "../Styles/defultBoxStyle";

const ClassSelButton = ({ text, isSelected, onPress }) => {
  const buttonWidth = 40 + text.length * 5; // Adjust the multiplier as needed

  return (
    <TouchableOpacity
      style={[
        defultBoxStyle.container,
        styles.passengerButton,
        isSelected && styles.selectedSeat,
        { width: buttonWidth }, // Set the calculated width
      ]}
      onPress={() => onPress(text)} // Pass seatNumber to onPress
    >
      <View>
        <Title3 style={styles.seatText}>{text}</Title3>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  passengerButton: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
  selectedSeat: {
    backgroundColor: "#84BCFF",
    borderColor: "#84BCFF",
  },
  seatText: {
    color: "white",
    fontSize: 18,
  },
});

export default ClassSelButton;
