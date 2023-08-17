import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Divider, Text } from "react-native-paper";
import BookingInfoContainer from "../organisms/BookingInfoContainer";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import BoardingPassType from "../organisms/BoardingPassType";

export default function BoardingPassScreen({ navigation }) {
  return (
    <CenterViewContainer>
      <BoardingPassType data={user_info} />
      <BookingInfoContainer data={flight_info} />
    </CenterViewContainer>
  );
}
const user_info = {
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      type: "user",
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
  startWorldImage: "../../assets/images/worlds/earth.png",
  endWorldImage: "../../assets/images/worlds/mars.png",
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
