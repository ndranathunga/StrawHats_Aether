import React from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import Title3 from "../text/Title3";
import Title4 from "../text/Title4";
import RatingCircle from "../rating-container/RatingCircle";

const DestinationCard = ({ title, content, image }) => (
  <View style={styles.container}>
    <ImageBackground
      source={image}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.cardText}>
        <Title3>{title}</Title3>
        <View style={styles.descriptionRating}>
          <Title4>{content}</Title4>
          <RatingCircle rating="4.5" />
        </View>
      </View>
    </ImageBackground>
  </View>
);

export default DestinationCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    height: 150,
    windth: "100%",
    alignItems: "right",
    marginBottom: 15,
  },
  cardText: {
    backgroundColor: "#00000010",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    borderRadius: 8,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 8,
  },
  descriptionRating: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
