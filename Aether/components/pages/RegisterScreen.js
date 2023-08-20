import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";
import CustomButton from "../atoms/buttons/CustomButton";
import DynamicBackground from "../templates/DynamicBackground";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const usernameError = (submitted && !username) || false;
  const emailError = (submitted && !email) || false;
  const passwordError = (submitted && !password) || false;

  const handleRegister = () => {
    setSubmitted(true);
    if (username && email && password) {
      // Simulate successful registration
      navigation.navigate("Home");
    }
  };

  return (
    <DynamicBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={[styles.textField, { marginBottom: 0 }]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="grey"
        />
        <HelperText type="error" visible={usernameError}>
          Username is required
        </HelperText>
        <TextInput
          style={[styles.textField, { marginBottom: 0 }]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="grey"
        />
        <HelperText type="error" visible={emailError}>
          Email is required
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
        <CustomButton title="Register" onPress={handleRegister} />
        <TouchableOpacity style={styles.loginButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </DynamicBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 5,
  },
  loginButton: {
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
