import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatBlock from "../molecules/SeatBlock";

export default function SeatRow({
  level,
  handleSeatPress,
  selectedSeats,
  numberSetL,
  numberSetR,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.seatRow}>
        <SeatBlock
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          SeatNumbers={numberSetL}
        />
        <Text>{level}</Text>
        <SeatBlock
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          SeatNumbers={numberSetR}
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
    padding: 16,
  },

  seatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
