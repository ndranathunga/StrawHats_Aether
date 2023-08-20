import React, { useState } from "react";
import { Divider } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import BookingInfoCard from "../molecules/BookingInfoCard";

export default function BoardingInfoCard({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor}>{data.title}</Text>
      <Text style={styles.fontColor}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//     padding: 10,
  },
  fontColor: {
    color: "#fff",
  },
});
