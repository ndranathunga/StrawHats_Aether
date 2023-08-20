import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { HelperText } from "react-native-paper";
import CustomButton from "../atoms/buttons/CustomButton";
import DynamicBackground from "../templates/DynamicBackground";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("john_doe");
  const [password, setPassword] = useState("fhadsfhakekjfefj");
  const [submitted, setSubmitted] = useState(false);

  const usernameError = (submitted && !username) || false;
  const passwordError = (submitted && !password) || false;

  const handleLogin = () => {
    setSubmitted(true);
    if (username && password) {
      // Simulate successful login
      navigation.navigate("Main");
    }
  };

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
        <View style={{height: 200, alignItems: "center"}}>
          <Animated.Image
            source={logoImage}
            style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
          />
        </View>

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={[styles.textField, { marginBottom: 0 }]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="grey"
        />
        <HelperText
          type="error"
          visible={usernameError}
          style={{ display: usernameError ? "flex" : "none" }}
        >
          Username is required
        </HelperText>
        <TextInput
          style={[styles.textField, { marginBottom: 0 }]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="grey"
        />
        <HelperText type="error" visible={passwordError}>
          Password is required
        </HelperText>
        <CustomButton title="Login" onPress={handleLogin} />
        <TouchableOpacity style={styles.registerButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//     justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  textField: {
    width: "100%",
    height: 65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.40)",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
  registerButton: {
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
  logo: {
    width: 150, // Adjust the logo width as needed
    height: 150, // Adjust the logo height as needed
    resizeMode: "contain",
  },
});
