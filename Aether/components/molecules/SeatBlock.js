import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import SeatButton from "../atoms/buttons/SeatButton";

export default function SeatBlock ({ navigation }){
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
    <View style={styles.container}>
      <View style={styles.seatRow}>
        <SeatButton
          seatNumber={1}
          isSelected={selectedSeats.includes(1)}
          onPress={handleSeatPress}
        />
        <SeatButton
          seatNumber={2}
          isSelected={selectedSeats.includes(2)}
          onPress={handleSeatPress}
        />
      </View>
      <View style={styles.seatRow}>
        <SeatButton
          seatNumber={3}
          isSelected={selectedSeats.includes(3)}
          onPress={handleSeatPress}
        />
        <SeatButton
          seatNumber={4}
          isSelected={selectedSeats.includes(4)}
          onPress={handleSeatPress}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

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


