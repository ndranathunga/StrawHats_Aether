import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DynamicBackground from "../templates/DynamicBackground";

const NotificaitonsScreen = () => {
  return (
    <DynamicBackground>
      <View style={styles.container}>
        <Text style={styles.message}>Under Construction</Text>
      </View>
    </DynamicBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0f0f0",
  },
});

export default NotificaitonsScreen;