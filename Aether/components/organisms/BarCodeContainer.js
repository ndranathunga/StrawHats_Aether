import React, { useState } from "react";
import Barcode from "@kichiyaki/react-native-barcode-generator";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";

const calculateWidthPercentage = (percentage) => {
  const screenWidth = Dimensions.get("window").width;
  return Math.floor(screenWidth * (percentage / 100));
};

function removeNonAlphanumeric(inputString) {
  return inputString.replace(/[^A-Za-z0-9]/g, "");
}

export default function BarCodeContainer({ data }) {
  const boardingPassString = JSON.stringify(data);

  return (
    <SafeAreaView style={[styles.container, styles.barcode]}>
      <View>
        <Barcode
          value={removeNonAlphanumeric(boardingPassString)}
          format="CODE39"
          maxWidth={calculateWidthPercentage(90)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    //     padding: 20,
    width: "90%",
  },
  barcode: {
    marginBottom: 20,
  },
  boardingPassDetail: {
    marginBottom: 10,
    fontSize: 16,
  },
});
