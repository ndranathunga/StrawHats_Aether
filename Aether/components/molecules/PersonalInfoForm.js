import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

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

  const handleInputChange = (field, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[currentPassengerIndex][field] = value;
    setPassengerDetails(updatedDetails);
  };

  const handleNextPassenger = () => {
    if (currentPassengerIndex < passengerCount - 1) {
      setCurrentPassengerIndex(currentPassengerIndex + 1);
      // if this passenger has not been filled out yet, give him a clear form
        if (passengerDetails[currentPassengerIndex + 1].email === '') {
            setPassengerDetails([
                ...passengerDetails.slice(0, currentPassengerIndex + 1),
                {
                email: '',
                address: '',
                passport: '',
                dob: '',
                country: '',
                phone: '',
                },
                ...passengerDetails.slice(currentPassengerIndex + 2),
            ]);
            }
    }
  };

  const handlePreviousPassenger = () => {
    if (currentPassengerIndex > 0) {
      setCurrentPassengerIndex(currentPassengerIndex - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(passengerDetails);
  };

  const currentPassengerData = passengerDetails[currentPassengerIndex];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.passengerContainer}>

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


