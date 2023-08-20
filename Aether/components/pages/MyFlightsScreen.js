import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";
import { Text, Button } from "react-native-paper";
import DynamicBackground from "../templates/DynamicBackground";
import CustomButton from "../atoms/buttons/CustomButton";
import Headline from "../atoms/text/Headline";
import Title1 from "../atoms/text/Title1";
import Icon from "react-native-vector-icons/Ionicons";

export default function MyFlightScreen({ navigation }) {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const logoImage = require("../../assets/images/splash-logo.png");

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1, // Final scale value
      duration: 1000, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <DynamicBackground>
      <View style={styles.container}>
		<View style={{paddingBottom:"10%"}}>
        <Animated.Image
          source={logoImage}
          style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
        />
		</View>
        <Title1>Under Construction</Title1>
        <Button mode="outlined" onPress={() => navigation.navigate("Home")}>
          <Text>Go back to Home Screen</Text>
          <Icon name="arrow-forward-outline" style={{color:"white"}} size={20}></Icon>
        </Button>
      </View>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
	paddingBottom:"60%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust the logo width as needed
    height: 150, // Adjust the logo height as needed
    resizeMode: "contain",
  },
});
