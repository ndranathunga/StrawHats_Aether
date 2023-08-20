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
import UserTypeContainer from "../atoms/text-container/UserTypeContainer";

export default function BoardingPassType({ data }) {
  return (
    <View style={styles.container}>
      <UserTypeContainer title={data.title} name={data.name} type={data.type} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//     flex: 1,
    width: "95%",
    // padding: 10,
    marginTop: 10,
    // backgroundColor: "red",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
  },
});
