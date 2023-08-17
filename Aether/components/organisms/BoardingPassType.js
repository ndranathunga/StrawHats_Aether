import React, { useState } from "react";
import { Divider } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
// import SearchResultCard from "../molecules/SearchResultCard";
import BookingInfoCard from "../molecules/BookingInfoCard";

export default function BoardingPassType({ data }) {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//     flex: 1,
    width: "95%",
    padding: 10,
    marginTop: 10,
//     backgroundColor: "red",
    //     justifyContent: "center",
  },
});
