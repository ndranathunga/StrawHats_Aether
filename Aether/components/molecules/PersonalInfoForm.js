import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Animated } from 'react-native';

const passengerCount = 3; // Change this to the desired number of passengers

const PersonalInfoForm = () => {
  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: passengerCount }, () => ({
      email: '',
      address: '',
      passport: '',
      dob: '',
      country: '',
      phone: '',
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
      { translateX: slideValue.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [-300, 0, 300],
      }) },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.passengerContainer}>
        <Animated.View style={[styles.animatedPassengerContainer, animatedContainerStyle]}>
          <TextInput
            placeholder="Email"
            onChangeText={(value) => handleInputChange('email', value)}
            value={currentPassengerData.email}
            style={styles.input}
          />
          {/* Other input fields */}
          <TextInput
          placeholder="Email"
          onChangeText={(value) => handleInputChange('email', value)}
          value={currentPassengerData.email}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          onChangeText={(value) => handleInputChange('address', value)}
          value={currentPassengerData.address}
          style={styles.input}
        />
        <TextInput
          placeholder="Passport Number"
          onChangeText={(value) => handleInputChange('passport', value)}
          value={currentPassengerData.passport}
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth"
          onChangeText={(value) => handleInputChange('dob', value)}
          value={currentPassengerData.dob}
          style={styles.input}
        />
        <TextInput
          placeholder="Country"
          onChangeText={(value) => handleInputChange('country', value)}
          value={currentPassengerData.country}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          onChangeText={(value) => handleInputChange('phone', value)}
          value={currentPassengerData.phone}
          style={styles.input}
        />
        </Animated.View>
        <View style={styles.navigationButtons}>
          <Button title="<" onPress={handlePreviousPassenger} disabled={currentPassengerIndex === 0} />
          <Text> Passenger {currentPassengerIndex + 1} </Text>
          <Button title=">" onPress={handleNextPassenger} disabled={currentPassengerIndex === passengerCount - 1} />
        </View>
      </View>
      <Button title="Submit Details" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  passengerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  animatedPassengerContainer: {
    overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default PersonalInfoForm;



