import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";
import CustomButton from "../atoms/buttons/CustomButton";
import DynamicBackground from "../templates/DynamicBackground";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const usernameError = (submitted && !username) || false;
  const passwordError = (submitted && !password) || false;

  const handleLogin = () => {
    setSubmitted(true);
    if (username && password) {
      // Simulate successful login
      navigation.navigate("Home");
    }
  };

  return (
    <DynamicBackground>
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        style={[styles.textField, { marginBottom: 0}]}
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
  registerButton: {
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
