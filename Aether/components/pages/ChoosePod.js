import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import SeatReservation from '../organisms/SeatReservation';

const ChoosePod = () => {
    const handleSubmit = () => {
        // Logic to submit selected seats
        console.log('Selected Seats:', selectedSeats);
      };
  
      
    return (
            <SeatReservation />
            
        
    );
}



export default ChoosePod;


