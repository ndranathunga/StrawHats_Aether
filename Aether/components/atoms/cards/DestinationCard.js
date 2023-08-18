import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const DestinationCard = ({ title, content }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

export default DestinationCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3,
    width: 350,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
