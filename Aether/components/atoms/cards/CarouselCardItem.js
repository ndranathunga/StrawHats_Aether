import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container} key={index}>
        <ImageBackground
          source={item.image}
          //   source={ require("../../../assets/images/backgrounds/mars-bg-temp.jpeg" )}
          style={styles.image}
          imageStyle={styles.imageStyle}
        >
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 220,
    width: ITEM_WIDTH,
    overflow: "hidden", // Prevent content overflow
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  imageStyle: {
    opacity: 0.7, // Adjust the image opacity if needed
  },
  header: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    marginLeft: 10, // Align header towards the left
  },
  body: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
    marginLeft: 10, // Align body towards the left
    position: "absolute", // Position the body text near the bottom
    bottom: 10, // Adjust the distance from the bottom
  },
});

export default CarouselCardItem;
