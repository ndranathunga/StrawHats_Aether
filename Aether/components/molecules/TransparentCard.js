import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import Body1 from "../atoms/text/Body1";
import Body2 from "../atoms/text/Body2";
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
          <Text style={styles.optionButtonText}>
            <Body1>One way</Body1>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === "roundTrip" && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect("roundTrip")}
        >
          <Text style={styles.optionButtonText}>
            <Body1>Round Trip</Body1>
          </Text>
        </TouchableOpacity>
      </View>

      <Divider style={styles.divider} />
      <View style={styles.locationContainer}>
        <View style={styles.location}>
          <Icon
            name="location-outline"
            color={"white"}
            size={16}
            style={styles.icon}
          ></Icon>
          <Body1>Your Location</Body1>
        </View>
        <View style={styles.arrows}>
          <Icon name="arrow-forward" color={"white"} size={10}></Icon>
          <Icon name="arrow-back" color={"white"} size={10}></Icon>
        </View>
        <View style={styles.location}>
          <Icon
            name="location-outline"
            color={"white"}
            size={16}
            style={styles.icon}
          ></Icon>
          <Body1>Select Destination</Body1>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.dateContainer}>
        <View style={styles.dateInputContainer}>
          <Icon
            name="calendar-outline"
            color={"white"}
            size={25}
            style={styles.icon}
          />
          <Text
            onPress={() => console.log("Need to go to date picker")}
            title={"date picker"}
          >
            <Body1>Add Departure Date</Body1>
          </Text>
          {/* ... */}
        </View>
        {showReturnDate && (
          <View style={styles.dateInputContainer}>
            <Icon
              name="calendar-outline"
              color={"white"}
              size={25}
              style={styles.icon}
            />
            <Text
              onPress={() => console.log("Need to go to date picker")}
              title={"date picker"}
            >
              <Body1>Add Return Date</Body1>
            </Text>
            {/* ... */}
          </View>
        )}
      </View>

      <Divider style={styles.divider} />

      <View style={styles.passengerContainer}>
        <View style={styles.passengerItem}>
          <Icon
            name="people-outline"
            color="white"
            size={16}
            style={styles.icon}
          />
          <Body1>Passengers</Body1>
        </View>
        <View style={styles.passengerItem}>
          <View style={styles.dot} />
        </View>
        <View style={styles.passengerItem}>
          <Body1>Class</Body1>
        </View>
      </View>

      <Divider style={{ ...styles.divider, marginBottom: 0 }} />

      <View>
        <Button
          onPress={() => console.log("Hello")}
          style={styles.btn}
          labelStyle={styles.btnLabel}
        >
          Search Flights
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    color: "#FFFFFF01",
    width: "90%",
    padding: 15,
    margin: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
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
    backgroundColor: "#82C3FF25",
  },
  optionButtonText: {
    textAlign: "center",
  },
  divider: {
    backgroundColor: "white", // Set the color to white
    height: 1, // Adjust the height as needed
    width: "100%", // Adjust the width as needed
    marginVertical: 5, // Add spacing around the divider
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrows: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    justifyContent: "space-evenly",
  },
  dateInputContainer: {
    margin: 5,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    padding: 5,
    width: "100%",
    // backgroundColor: "lightblue",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  btnLabel: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
  passengerContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  passengerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default TransparentCard;
