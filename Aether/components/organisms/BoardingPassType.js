import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
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
    width: "95%",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
