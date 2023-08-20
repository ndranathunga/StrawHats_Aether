import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BoardingInfoCard from "../molecules/BoardingInfoCard";

export default function BoardingInfoContainer({ data }) {
  console.log(data);
  return (
    <View style={[styles.container, styles.row]}>
      <BoardingInfoCard data={data.flight} />
      <BoardingInfoCard data={data.gate} />
      <BoardingInfoCard data={data.pod} />
      <BoardingInfoCard data={data.level} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
