import * as React from "react";
import { View, Text } from "react-native";
import PersonalInfoForm from "../molecules/PersonalInfoForm";

export default function PersonalInfoContainer({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <PersonalInfoForm navigation={navigation} />
    </View>
  );
}
