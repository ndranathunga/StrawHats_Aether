import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Title3 from "../text/Title2";
import { defultBoxStyle } from '../Styles/defultBoxStyle';

const PassengerButton = ({ seatNumber, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        defultBoxStyle.container,
        styles.passengerButton,
        isSelected && styles.selectedSeat,
      ]}
      onPress={() => onPress(seatNumber)} // Pass seatNumber to onPress
    >
      <Title3 style={styles.seatText}>{seatNumber}</Title3>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  passengerButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    margin: 1,
  },
  selectedSeat: {
    backgroundColor: '#84BCFF',
    borderColor: '#84BCFF',
  },
  seatText: {
    color: "white",
    fontSize: 18,
  },
});

export default PassengerButton;
