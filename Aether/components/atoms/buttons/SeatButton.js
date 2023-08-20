import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SeatButton = ({ seatNumber, isSelected, onPress, isUnavailable }) => {
  return (
    <TouchableOpacity
      style={[
        styles.seatButton,
        isSelected && styles.selectedSeat,
        isUnavailable && styles.isUnavailableSeat,
      ]}
      onPress={() => onPress(seatNumber)}
      disabled={isUnavailable}
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
    backgroundColor: "#AEAEAE",
    borderRadius: 4,
    margin: 8,
    borderColor: "gray",
  },
  selectedSeat: {
    backgroundColor: "#77BEFF",
    borderColor: "#f0f0f0",
  },
  isUnavailableSeat: {
    backgroundColor: "#595959",
    borderColor: "#f0f0f0",
  },
  seatText: {
    color: "#f0f0f0",
    fontSize: 18,
  },
});

export default SeatButton;
