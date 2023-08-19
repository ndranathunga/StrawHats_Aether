import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import DestinationSearchBlock from "../organisms/DestinationSearchBlock";
import MarsBg from "../../assets/images/backgrounds/mars-bg-temp.jpeg";

const DestinationSearchScreen = () => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      source={MarsBg}
    >
      <DestinationSearchBlock />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 8,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 8,
  },
});
export default DestinationSearchScreen;
