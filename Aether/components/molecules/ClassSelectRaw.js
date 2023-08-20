import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ClassSelButton from "../atoms/buttons/ClassSelButton";

export default function NumberedSelectButtonRow({
  handlePress,
  selectedButton, // Change selected to selectedButton
  Classes,
}) {
  // Limit the number of buttons to a maximum of 10
  const buttonCount = Classes.length;

  return (
    <View style={styles.container}>
      <View style={styles.seatRow}>
        {Classes.slice(0, buttonCount).map((classItem) => ( // Rename 'class' to 'classItem'
          <ClassSelButton
            key={classItem}
            text={classItem}
            isSelected={selectedButton === classItem}
            onPress={handlePress} // Pass the classItem to handlePress
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 16,
    // flex: 1,
  },
  seatRow: {
    flexDirection: "row",
  },
});
