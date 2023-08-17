import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import SeatBlock from "../molecules/SeatBlock";

export default function SeatReservation({ navigator }) {
  return <SeatBlock navigation={navigator} />;
}
