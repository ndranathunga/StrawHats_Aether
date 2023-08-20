import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatBlock from "../molecules/SeatBlock";
import Title2 from "../atoms/text/Title2";

export default function SeatRow({
  level,
  handleSeatPress,
  selectedSeats,
  numberSetL,
  numberSetR,
  unavailableSeats,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.seatRow}>
        <SeatBlock
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          SeatNumbers={numberSetL}
          unavailbleSeats={unavailableSeats[0]}
        />
        <Title2>{level}</Title2>
        <SeatBlock
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          SeatNumbers={numberSetR}
          unavailbleSeats={unavailableSeats[1]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },

  seatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
