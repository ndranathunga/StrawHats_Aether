import React from "react";
import {
  TouchableOpacity,
  Text,
  Linking,
  StyleSheet,
  Image,
  View,
} from "react-native";
import Title1 from "../text/Title1";
import Title4 from "../text/Title4";
import Nebula from "../../../assets/images/nebula/nebani.png";

export default function NebulaButton({ navigation }) {
  const openNebulaChatbot = () => {
    // Replace 'nebula-chatbot-url' with the actual URL of your Nebula chatbot

    navigation.navigate("Nebula");
    // Open the chatbot URL in the device's default web browser
    // Linking.openURL(chatbotUrl);
  };

  return (
    <TouchableOpacity onPress={openNebulaChatbot} style={styles.container}>
      <View>
        <Title1>Chat with Nebula</Title1>
        <Title4>Your Cosmic Companion for Interstellar Inquiries</Title4>
      </View>

      <Image
        source={Nebula} // Replace with the actual path to your image
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: "#FFFFFF20",
    width: "90%",
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  image: {
    width: 70,
    height: 70,
  },
});
