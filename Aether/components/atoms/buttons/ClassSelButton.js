import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Body1 from "../text/Body1";
import { defultBoxStyle } from "../Styles/defultBoxStyle";

const ClassSelButton = ({ text, isSelected, onPress }) => {
  const buttonWidth = 60 + text.length * 5; // Adjust the multiplier as needed

  return (
    <View style={{marginRight:5}}>
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
        <Body1 style={styles.seatText}>{text}</Body1>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passengerButton: {
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
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
