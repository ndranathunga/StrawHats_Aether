import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card, Divider, Button } from "react-native-paper";

const TransparentCard = (navigation) => {
  const [selectedOption, setSelectedOption] = useState("oneWay");
  const [showReturnDate, setShowReturnDate] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowReturnDate(option === "roundTrip");
  };

  return (
    <Card style={{ ...styles.card, padding: "20" }}>
      <View style={styles.cardHeader}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "oneWay" && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect("oneWay")}
        >
          <Text style={styles.optionButtonText}>One way</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "roundTrip" && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect("roundTrip")}
        >
          <Text style={styles.optionButtonText}>Round Trip</Text>
        </TouchableOpacity>
      </View>

      <Divider />
      <View style={styles.locationContainer}>
        <View style={styles.location}>
          <Icon name="location-outline" color={"black"} size={16}></Icon>
          <Text>Your Location</Text>
        </View>
        <View style={styles.arrows}>
          <Icon name="arrow-forward" color={"black"} size={10}></Icon>
          <Icon name="arrow-back" color={"black"} size={10}></Icon>
        </View>
        <View style={styles.location}>
          <Icon
            name="location-outline"
            color={"black"}
            size={16}
            style={styles.icon}
          ></Icon>
          <Text>Select Destination</Text>
        </View>
      </View>
      <Divider />
      <View style={styles.dateContainer}>
      <Icon name="calendar-outline" 
        color={"black"} 
        size={16}
        >
        </Icon>
        <View style={styles.dateInputContainer}>

          {/* Date picker does not work. Need to fix */}

          <Text
          onPress={() => navigation.navigate("Date Picker")}
          title={"date picker"} >Departure Date:</Text>
          <TextInput
            style={styles.dateInput}
            placeholder="Select departure date"
          />
        </View>
        {showReturnDate && (
          <View style={styles.dateInputContainer}>
            <Text>Return Date:</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="Select return date"
            />
          </View>
        )}
      </View>
      <Divider />

      <Button
        onPress={() => console.log("Hello")}
        mode="outlined"
        theme={styles.btnTheme}
        style={styles.btn}
        labelStyle={styles.btnLabel}
        contentStyle={styles.btnContent}
      >
        Search Flights
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 15,
    marginTop: 30,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedOption: {
    backgroundColor: "lightblue",
  },
  optionButtonText: {
    color:"white",
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrows: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Space items evenly
    alignItems: "center", // Center items vertically
    margin: 20,
  },
  dateInputContainer: {
    justifyContent: "center",
    flex: 1,
    marginRight: 10, // Add spacing between departure and return date inputs
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  btnTheme: {
    roundness: 100,
  },
  btn: {
    width: "100%",
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnLabel: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  btnContent: {
    borderRadius: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default TransparentCard;
