import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SeatButton = ({ seatNumber, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.seatButton, isSelected && styles.selectedSeat]}
      onPress={() => onPress(seatNumber)}
    >
      <Text style={styles.seatText}>{seatNumber}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seatButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    margin: 8,
    borderColor: "gray",
  },
  selectedSeat: {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  seatText: {
    color: "black",
    fontSize: 18,
  },
});

export default SeatButton;
