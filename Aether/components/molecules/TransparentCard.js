import { Card, Divider, Avatar, Button, Text } from "react-native-paper";

import Title3 from "../atoms/Text/Title3";
import Title4 from "../atoms/Text/Title4";

import Body1 from "../atoms/Text/Body1";
import Body2 from "../atoms/Text/Body2";

import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

const TransparentCard = ({ result }) => (
  <Card>
    <Card.Content>
      <View style={styles.header}>
        <Button
          onPress={() => console.log("One Way")}
          mode="outlined"
          theme={styles.btnTheme}
          style={styles.TripBtn}
          labelStyle={styles.btnLabel}
          contentStyle={styles.btnContent}
        >
          One Way
        </Button>
        <Button
          onPress={() => console.log("Round Trip")}
          mode="outlined"
          theme={styles.btnTheme}
          style={{ ...styles.TripBtn, marginLeft: 30 }}
          labelStyle={styles.btnLabel}
          contentStyle={styles.btnContent}
        >
          Round Trip
        </Button>
      </View>

      <Divider />

      <View style={styles.cardContent}>
        <View style={styles.cardOptions}>
          <Icon
            name="location-outline"
            color={"white"}
            style={styles.icon}
          ></Icon>
          <Body1>
            <Text onPress={() => console.log("Going to your location")}>
              {"Your Location"}
            </Text>
          </Body1>
        </View>
        <View style={{flexDirection:"column",marginTop:10}}>
        <Icon name="arrow-forward" color={"white"} size={10}></Icon>
        <Icon name="arrow-back" color={"white"} size={10}></Icon>
        </View>
        <View style={styles.cardOptions}>
          <Body1>
            <Text onPress={() => console.log("Going to select destination")}>
              {"Select Destination"}
            </Text>
          </Body1>
        </View>
      </View>
      <Divider />
      <View style={styles.cardContent}>
        <View style={styles.date}>
          <Title3>{"foo2"}</Title3>
          <Body2>{"h"}</Body2>
        </View>
        <View style={styles.price}>
          <Title3>{"heh"}</Title3>
        </View>
      </View>
    </Card.Content>
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

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  tripBtn: {
    width: "100%",
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-around",
  },
  cardOptions: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 10, // Add margin to the right of the icon
  },
  btnTheme: {
    roundness: 100,
  },
  date: { flex: 4 },
  price: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
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
