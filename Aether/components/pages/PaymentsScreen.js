import * as React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Divider, Text } from "react-native-paper";
import BookingInfoContainer from "../organisms/BookingInfoContainer";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchResultList from "../organisms/SearchResultList";
import PaymentFormContainer from "../organisms/PaymentFormContainer";
import DynamicBackground from "../templates/DynamicBackground";

export default function PaymentsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <DynamicBackground>
        <CenterViewContainer>
          <BookingInfoContainer data={flight_info} />

          <PaymentFormContainer navigation={navigation} />
        </CenterViewContainer>
      </DynamicBackground>
    </SafeAreaView>
  );
}

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

const styles = StyleSheet.create({
  container: {
    // // marginBottom: 16,
    // paddingLeft: 15,
    // paddingRight: 15,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
