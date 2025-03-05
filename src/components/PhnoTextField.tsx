import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/colors/Colors";

interface PhoneNumberInputProps {
  onVerify: (phone: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validatePhoneNumber = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setPhoneNumber(numericText);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={validatePhoneNumber}
        />
        {phoneNumber.length === 10 && (
          <TouchableOpacity style={styles.verifyButton} onPress={() =>  onVerify(phoneNumber)}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  //  backgroundColor: "#fff",
    position: "relative",
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingRight: 60,
    paddingLeft: 10 // Space for Verify button
  },
  inputError: {
    borderColor: "red",
  },
  verifyButton: {
    position: "absolute",
    right: 10,
    backgroundColor: Colors.pastelPurple,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  verifyText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default PhoneNumberInput;
