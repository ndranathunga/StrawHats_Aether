import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BookingInfoContainer from "../organisms/BookingInfoContainer";
import CenterViewContainer from "../atoms/view-containers/CenterViewContainer";
import SearchResultList from "../organisms/SearchResultList";

export default function MyFlightsScreen({ navigation }) {
  return (
    // <View style={ styles.container }>
    //   {/* <Text>Payments Screen</Text> */}
    //   <BookingInfoContainer />
    // </View>

    <CenterViewContainer>
      <BookingInfoContainer data={flight_info} />
    </CenterViewContainer>
  );
}

const flight_info = {
  id: "1",
  flightCompany: "Blue Origin",
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
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
