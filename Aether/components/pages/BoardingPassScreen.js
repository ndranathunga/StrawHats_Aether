import * as React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Divider, Text } from "react-native-paper";
import BookingInfoContainer from "../organisms/BookingInfoContainer";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import BoardingPassType from "../organisms/BoardingPassType";
import BoardingInfoContainer from "../organisms/BoardingInfoContainer";
import BarCodeContainer from "../organisms/BarCodeContainer";
import CustomButton from "../atoms/buttons/CustomButton";
import DynamicBackground from "../templates/DynamicBackground";

export default function BoardingPassScreen({ navigation }) {
  return (
    <DynamicBackground>
      <CenterViewContainer>
        <BoardingPassType data={user_info} />
        <BookingInfoContainer data={flight_info} />
        {/* View instead of divider. don't know why it's not working. fuck this */}
        <View
          style={{
            height: 1,
            backgroundColor: "white",
            width: "75%",
            marginTop: 20,
          }}
        >
          <Text>0</Text>
        </View>

        <View
          style={{
            width: "95%",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BoardingInfoContainer data={boarding_pass} />
        </View>

        {/* View instead of divider. don't know why it's not working. fuck this */}
        <View
          style={{
            height: 1,
            backgroundColor: "white",
            width: "75%",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          <Text>0</Text>
        </View>

        <BarCodeContainer data={boarding_pass} />

        <CustomButton
          title="Download"
          onPress={() => {
            navigation.navigate("Boarding Pass");
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Return to Home Screen
          </Text>
        </TouchableOpacity>
      </CenterViewContainer>
    </DynamicBackground>
  );
}
const user_info = {
  id: "1",
  title: "Mr",
  name: "John Doe",
  email: "johndoe@gmail.com",
  type: "passenger",
};

const flight_info = {
  id: "1",
  flightCompany: "Blue Origin 2",
  flightCompanyLogo: "../assets/flight-companies/blue-origin.png",
  flightName: "New Shepard Mark V",
  duration: "7 mon 12 days",
  date: "28 Apr 2023",
  launchLocation: "Kennedy Space Center, Florida, USA",
  price: "$280,000",
  startWorld: "Earth",
  endWorld: "Mars",
  startWorldImage: require("../../assets/images/worlds/earth.png"),
  endWorldImage: require("../../assets/images/worlds/mars.png"),
};

const boarding_pass = {
  flight: {
    id: "1",
    title: "Flight",
    content: "X20-I",
  },
  gate: {
    id: "2",
    title: "Gate",
    content: "16",
  },
  pod: {
    id: "3",
    title: "Pod",
    content: "3A",
  },
  level: {
    id: "4",
    title: "Level",
    content: "3",
  },
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    width: "95%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent",
    height: 60,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
