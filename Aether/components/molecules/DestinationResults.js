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
        rating={4.5}
      />
      <DestinationCard
        title="Marsport Hub - Mars"
        content="43.26 Gm - Dry - Adventure and Exploration"
        image={MarsportHub}
        rating={2.5}
      />
      <DestinationCard
        title="Ascendant Launch - Mars"
        content="1.314 Tm - Tropical - Naturalistic and Eco-Friendly"
        image={AscendantLaunch}
        rating={4.8}
      />
      <DestinationCard
        title="Aitken basin Water Park - Moon"
        content="1.23 Tm - Polar - Wellness and Relaxation"
        image={AitkenBasin}
        rating={2.8}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    width: "95%",
    height: "75%",
  },
});

export default DestinationResults;
