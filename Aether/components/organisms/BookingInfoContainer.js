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

export default function BookingInfoContainer({ data }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <BookingInfoCard result={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginTop: 10,
  },
});
