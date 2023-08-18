import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DestinationCard from "../atoms/DestinationCard";

const DestinationResults = () => {
  return (
    <ScrollView style={styles.container}>
      <DestinationCard
        title="DestinationCard 1"
        content="This is the content of DestinationCard 1."
      />
      <DestinationCard
        title="DestinationCard 2"
        content="This is the content of DestinationCard 2."
      />
      <DestinationCard
        title="DestinationCard 3"
        content="This is the content of DestinationCard 3."
      />
      <DestinationCard
        title="DestinationCard 4"
        content="This is the content of DestinationCard 4."
      />
    </ScrollView>
  );
};

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
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default DestinationResults;
