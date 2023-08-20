import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Animated,
} from "react-native";
import TextInputContainer from "../atoms/text-container/TextInputContainer";
import IconButton from "../atoms/buttons/IconButton";
import CustomButton from "../atoms/buttons/CustomButton";

const passengerCount = 3; // Change this to the desired number of passengers

const PersonalInfoForm = () => {
  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: passengerCount }, () => ({
      email: "",
      address: "",
      passport: "",
      dob: "",
      country: "",
      phone: "",
    }))
  );

  const slideValue = new Animated.Value(0);

  const handleInputChange = (field, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[currentPassengerIndex][field] = value;
    setPassengerDetails(updatedDetails);
  };

  const handleNextPassenger = () => {
    if (currentPassengerIndex < passengerCount - 1) {
      Animated.timing(slideValue, {
        toValue: -1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPassengerIndex(currentPassengerIndex + 1);
        slideValue.setValue(0);
      });
    }
  };

  const handlePreviousPassenger = () => {
    if (currentPassengerIndex > 0) {
      Animated.timing(slideValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPassengerIndex(currentPassengerIndex - 1);
        slideValue.setValue(0);
      });
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(passengerDetails);
  };

  const currentPassengerData = passengerDetails[currentPassengerIndex];

  const animatedContainerStyle = {
    transform: [
      {
        translateX: slideValue.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-300, 0, 300],
        }),
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.passengerContainer}>
        <Animated.View
          style={[styles.animatedPassengerContainer, animatedContainerStyle]}
        >
          {/* Other input fields */}
          <TextInputContainer
            label="Email"
            value={currentPassengerData.email}
            onChange={(value) => handleInputChange("email", value)}
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label="Address"
            onChange={(value) => handleInputChange("address", value)}
            value={currentPassengerData.address}
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label="Passport Number"
            onChange={(value) => handleInputChange("passport", value)}
            value={currentPassengerData.passport}
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label="Date of Birth"
            onChange={(value) => handleInputChange("dob", value)}
            value={currentPassengerData.dob}
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label="Country"
            onChange={(value) => handleInputChange("country", value)}
            value={currentPassengerData.country}
            holderColor={"#E0E2EB"}
          />
          <TextInputContainer
            label="Phone Number"
            onChange={(value) => handleInputChange("phone", value)}
            value={currentPassengerData.phone}
            holderColor={"#E0E2EB"}
          />
        </Animated.View>
        <View style={styles.navigationButtons}>
          <IconButton
            icon="chevron-left"
            onPress={handlePreviousPassenger}
            disabled={currentPassengerIndex === 0}
          />
          <Text style={styles.passengerNo}>
            {" "}
            Passenger {currentPassengerIndex + 1}{" "}
          </Text>
          <IconButton
            icon="chevron-right"
            onPress={handleNextPassenger}
            disabled={currentPassengerIndex === passengerCount - 1}
          />
        </View>
      </View>
      <View style={styles.subButCont}>
        <CustomButton title="Submit Details" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  passengerContainer: {
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
  },
  animatedPassengerContainer: {
    overflow: "hidden",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  subButCont: {
    flex: 1,
    alignItems: "center",
    marginBottom: 36,
  },
  passengerNo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0E2EB",
  },
});

export default PersonalInfoForm;
