import React, { useState } from "react";
import { Divider, HelperText } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { PaymentIcon } from "react-native-payment-icons";
import CustomButton from "../atoms/buttons/CustomButton";

export default function PaymentFormContainer({ navigation }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiration, setExpiration] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    cardNumber: false,
    cvv: false,
    expiration: false,
  });

  const nameError = (submitted || touched.name) && !name;
  const cardNumberError =
    (submitted || touched.cardNumber) &&
    (!cardNumber || cardNumber.length < 16);
  const cvvError = (submitted || touched.cvv) && (!cvv || cvv.length !== 3);
  const expirationError = (submitted || touched.expiration) && !expiration;

  const handleConfirm = () => {
    setSubmitted(true);
    if (!nameError && !cardNumberError && !cvvError && !expirationError) {
      navigation.navigate("Boarding Pass");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textField}
          placeholder="Cardholder Name"
          value={name}
          onChangeText={setName}
          onBlur={() => setTouched({ ...touched, name: true })}
          placeholderTextColor={"grey"}
        />
        <HelperText type="error" visible={nameError}  style={{display: nameError ? "flex" : "none"}}>
          Cardholder Name is required
        </HelperText>

        <TextInput
          style={styles.textField}
          placeholder="Card Number"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={setCardNumber}
          onBlur={() => setTouched({ ...touched, cardNumber: true })}
          placeholderTextColor={"grey"}
        />
        <HelperText type="error" visible={cardNumberError}  style={{display: cardNumberError ? "flex" : "none"}}>
          Card Number is required and must be 16 digits
        </HelperText>

        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <View style={{flex: 3, width: "100%"}}>
          <TextInput
            style={[styles.textField, { marginRight: 24, width: "90%" }]}
            placeholder="Security Code"
            value={cvv}
            onChangeText={setCvv}
            onBlur={() => setTouched({ ...touched, cvv: true })}
            placeholderTextColor={"grey"}
          />
          <HelperText type="error" visible={cvvError} style={{display: cvvError ? "flex" : "none"}}>
            Security Code is required and must be 3 digits
          </HelperText>
          </View>
          <View  style={{flex: 3, width: "100%"}}>
          <TextInput
            style={[styles.textField, { width: "100%" }]}
            placeholder="Expiration Date"
            value={expiration}
            onChangeText={setExpiration}
            onBlur={() => setTouched({ ...touched, expiration: true })}
            placeholderTextColor={"grey"}
          />
          <HelperText type="error" visible={expirationError} style={{display: expirationError ? "flex" : "none"}}>
            Expiration Date is required
          </HelperText>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
            width: "55%",
          }}
        >
          <PaymentIcon type="visa" />
          <PaymentIcon type="master" />
          <PaymentIcon type="paypal" />
          <PaymentIcon type="discover" />
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
          marginBottom: 50,
          height: 120,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CustomButton title="Confirm" onPress={handleConfirm} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Cancel
          </Text>
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
    backgroundColor: "rgba(0,0,0,0.7)",
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
