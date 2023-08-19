import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RatingCircle = ({ rating }) => {
  return (
    <TouchableOpacity style={styles.Circle}>
      <Text style={styles.circleText}>{rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Circle: {
    backgroundColor: "#E0E2EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
  circleText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default RatingCircle;
