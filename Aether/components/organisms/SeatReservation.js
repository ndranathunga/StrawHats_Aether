import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatBlock from "../molecules/SeatBlock";

export default function SeatReservation({ navigator }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatPress = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleSubmit = () => {
    // Logic to submit selected seats
    console.log("Selected Seats:", selectedSeats);
    navigator.navigate("My Flights");
  };
  return (
    <View>
      <SeatBlock
        handleSeatPress={handleSeatPress}
        handleSubmit={handleSubmit}
        selectedSeats={selectedSeats}
        SeatNumbers={[1, 2, 3, 4]}
      />
      <SeatBlock
        handleSeatPress={handleSeatPress}
        handleSubmit={handleSubmit}
        selectedSeats={selectedSeats}
        SeatNumbers={[5, 6, 7, 8]}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
