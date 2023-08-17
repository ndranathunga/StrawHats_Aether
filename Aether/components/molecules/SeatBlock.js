import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import SeatButton from "../atoms/buttons/SeatButton";

export default function SeatBlock({
  handleSeatPress,
  handleSubmit,
  selectedSeats,
  SeatNumbers,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.seatRow}>
        <SeatButton
          seatNumber={SeatNumbers[0]}
          isSelected={selectedSeats.includes(SeatNumbers[0])}
          onPress={handleSeatPress}
        />
        <SeatButton
          seatNumber={SeatNumbers[1]}
          isSelected={selectedSeats.includes(SeatNumbers[1])}
          onPress={handleSeatPress}
        />
      </View>
      <View style={styles.seatRow}>
        <SeatButton
          seatNumber={SeatNumbers[2]}
          isSelected={selectedSeats.includes(SeatNumbers[2])}
          onPress={handleSeatPress}
        />
        <SeatButton
          seatNumber={SeatNumbers[3]}
          isSelected={selectedSeats.includes(SeatNumbers[3])}
          onPress={handleSeatPress}
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
  },
});
