import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import DestinationCard from "../atoms/cards/DestinationCard";
import VallesBase from "../../assets/images/destinations/valles-base.png";
import MarsportHub from "../../assets/images/destinations/marsport-hub.png";
import AscendantLaunch from "../../assets/images/destinations/ascendant-launch.png";
import AitkenBasin from "../../assets/images/destinations/aitken-basin.png";

const DestinationResults = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DestinationCard
        title="Valles Base Space Center - Mars"
        content="384.4 Mm - Polar - Wellness and Relaxation"  
        image={VallesBase}
      />
      <DestinationCard
        title="DestinationCard 2"
        content="This is the content of DestinationCard 2."
        image={MarsportHub}
      />
      <DestinationCard
        title="DestinationCard 3"
        content="This is the content of DestinationCard 3."
        image={AscendantLaunch}
      />
      <DestinationCard
        title="DestinationCard 4"
        content="This is the content of DestinationCard 4."
        image={AitkenBasin}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    width: "95%",
    height: "70%",
  },
});

export default DestinationResults;
