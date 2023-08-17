import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const SeatReservation = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
  
    const handleSeatPress = seatNumber => {
      if (selectedSeats.includes(seatNumber)) {
        setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
      } else {
        setSelectedSeats([...selectedSeats, seatNumber]);
      }
    };
  
    const handleSubmit = () => {
      // Logic to submit selected seats
      console.log('Selected Seats:', selectedSeats);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.seatRow}>
          <TouchableOpacity
            style={[
              styles.seatButton,
              selectedSeats.includes(1) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatPress(1)}
          >
            <Text style={styles.seatText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.seatButton,
              selectedSeats.includes(2) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatPress(2)}
          >
            <Text style={styles.seatText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seatRow}>
          <TouchableOpacity
            style={[
              styles.seatButton,
              selectedSeats.includes(3) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatPress(3)}
          >
            <Text style={styles.seatText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.seatButton,
              selectedSeats.includes(4) && styles.selectedSeat,
            ]}
            onPress={() => handleSeatPress(4)}
          >
            <Text style={styles.seatText}>4</Text>
          </TouchableOpacity>
        </View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    seatRow: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    seatButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'gray',
      marginRight: 4,
      marginLeft: 4,
    },
    selectedSeat: {
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
    seatText: {
      color: 'black',
      fontSize: 18,
    },
  });

  export default SeatReservation;