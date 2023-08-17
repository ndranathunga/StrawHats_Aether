import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatReservation from "../organisms/SeatReservation";

export default function ChoosePod({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SeatReservation navigator={navigation} />
    </View>
  );
}
