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
    //     <SafeAreaView style={styles.container}>

    //     </SafeAreaView>
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
//     flex: 1,
    width: "95%",
    // padding: 10,
    marginTop: 10,
//     backgroundColor: "red",
    //     justifyContent: "center",
  },
});
