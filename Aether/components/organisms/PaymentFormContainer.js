import React, { useState } from "react";
import { Divider } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import { PaymentIcon } from "react-native-payment-icons";
import CustomButton from "../atoms/buttons/CustomButton";

export default function PaymentFormContainer({ navigation }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  function onSubmit() {
    console.log("form submitted");
  }

  return (
    <View style={styles.container}>
      <View>
          <TextInput
            style={styles.textField}
            name="holderName"
            placeholder="Cardholder Name"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={"grey"}
          />
          <TextInput
            style={styles.textField}
            name="cardNumber"
            placeholder="Card Number"
            keyboardType="number-pad"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            placeholderTextColor={"grey"}
          />
          <View
            style={[
              styles.row,
              {
                justifyContent: "space-between",
              },
            ]}
          >
            <TextInput
              style={[
                styles.textField,
                {
                  marginRight: 24,
                  width: "40%",
                },
              ]}
              placeholder="Security Code"
              value={cvv}
              onChangeText={(text) => setCvv(text)}
              placeholderTextColor={"grey"}
            />
            <TextInput
              style={[styles.textField, { width: "50%" }]}
              placeholder="Expiration Date"
              value={expiration}
              onChangeText={(text) => setExpiration(text)}
              placeholderTextColor={"grey"}
            />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 20,
                width: "55%",
              },
            ]}
          >
            <PaymentIcon type="visa" />
            <PaymentIcon type="master" />
            <PaymentIcon type="paypal" />
            <PaymentIcon type="discover" />
          </View>
        </View>

        <View
          style={[
            {
              marginTop: 20,
              marginBottom: 50,
              height: 120,
              justifyContent: "space-evenly",
            //   backgroundColor: "green",
            },
          ]}
        >
          <CustomButton title="Confirm" onPress={() => {navigation.navigate("Boarding Pass")}} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => {navigation.navigate("Home")}}>Cancel</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
//     backgroundColor: "lightblue",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  textField: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
  btn: {
    width: "50%",
    borderRadius: 10,
  },
  button: {
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
});
