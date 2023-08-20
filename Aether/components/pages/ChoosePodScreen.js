import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatRow from "../organisms/SeatRow";
import CustomButton from "../atoms/buttons/CustomButton";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import DynamicBackground from "../templates/DynamicBackground";

export default function ChoosePodScreen({ navigation }) {
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
    navigation.navigate("Personal Info");
  };
  return (
    <DynamicBackground>
      <CenterViewContainer styles={styles.container}>
        <SeatRow
          level={"level 4"}
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          numberSetL={[25, 26, 27, 28]}
          numberSetR={[29, 30, 31, 32]}
          unavailableSeats={[
            [true, false, false, true],
            [false, false, false, false],
          ]}
        />
        <SeatRow
          level={"level 3"}
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          numberSetL={[17, 18, 19, 20]}
          numberSetR={[21, 22, 23, 24]}
          unavailableSeats={[
            [false, false, false, false],
            [false, false, false, false],
          ]}
        />
        <SeatRow
          level={"level 2"}
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          numberSetL={[9, 10, 11, 12]}
          numberSetR={[13, 14, 15, 16]}
          unavailableSeats={[
            [false, false, false, false],
            [false, false, false, false],
          ]}
        />
        <SeatRow
          level={"level 1"}
          handleSeatPress={handleSeatPress}
          selectedSeats={selectedSeats}
          numberSetL={[1, 2, 3, 4]}
          numberSetR={[5, 6, 7, 8]}
          unavailableSeats={[
            [false, false, false, false],
            [false, true, true, false],
          ]}
        />

        <CustomButton title="Confirm" onPress={handleSubmit} />
      </CenterViewContainer>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },marginBottom: 20,
});
