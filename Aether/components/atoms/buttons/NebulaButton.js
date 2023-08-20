import React from "react";
import { TouchableOpacity, Text, Linking, StyleSheet } from "react-native";
import Title1 from "../text/Title1";

const NebulaButton = () => {
  const openNebulaChatbot = () => {
    // Replace 'nebula-chatbot-url' with the actual URL of your Nebula chatbot
    const chatbotUrl = "nebula-chatbot-url";

    // Open the chatbot URL in the device's default web browser
    Linking.openURL(chatbotUrl);
  };

  return (
    <TouchableOpacity onPress={openNebulaChatbot} style={styles.container}>
      <Title1>test</Title1>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default NebulaButton;
