import React, { useState } from "react";
import { Divider } from "react-native-paper";
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
import BookingInfoCard from "../molecules/BookingInfoCard";
import BoardingInfoCard from "../molecules/BoardingInfoCard";

const calculateWidthPercentage = (percentage) => {
  const screenWidth = Dimensions.get("window").width;
  //   console.log(screenWidth);
  return Math.floor(screenWidth * (percentage / 100));
};

function removeNonAlphanumeric(inputString) {
  return inputString.replace(/[^A-Za-z0-9]/g, "");
}

export default function BoardingInfoContainer({ data }) {
  const boardingPassString = JSON.stringify(data);

  return (
    <SafeAreaView style={[styles.container, styles.barcode]}>
      <View>
        <Barcode
          value={"Hello World"}
      //     value={removeNonAlphanumeric(boardingPassString)}
          format="CODE39"
          //     component={boardingPassString}
          maxWidth={calculateWidthPercentage(95)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    //     padding: 20,
    width: "95%",
  },
  barcode: {
    marginBottom: 20,
  },
  boardingPassDetail: {
    marginBottom: 10,
    fontSize: 16,
  },
});
