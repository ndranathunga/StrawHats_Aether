import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatRow from "../organisms/SeatRow";

export default function ChoosePod({ navigation }) {
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
    navigation.navigate("My Flights");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SeatRow
        level={"level 1"}
        handleSeatPress={handleSeatPress}
        selectedSeats={selectedSeats}
        numberSetL={[1, 2, 3, 4]}
        numberSetR={[5, 6, 7, 8]}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
