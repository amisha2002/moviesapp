import React, { RefObject, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import { OTPInput } from "./otp";
import Colors from "../assets/colors/Colors";

interface CustomPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const CustomPopup: React.FC<CustomPopupProps> = ({ isVisible, onClose, title = "OTP Verification", message = "OTP is sent this phone number" }) => {
  const  isLoaded = true
      const [codes, setCodes] = useState<string[] | undefined>(Array(6).fill(""));
      const refs: RefObject<TextInput>[] = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),//
        useRef<TextInput>(null),
      ];
    
      const [errorMessages, setErrorMessages] = useState<string>();
    
      if (!isLoaded) {
        return <Text>Loading...</Text>;
      }
    
      const onChangeCode = (text: string, index: number) => {
        if (text.length > 1) {
          setErrorMessages(undefined);
          const newCodes = text.split("");
          setCodes(newCodes);
          refs[5]!.current?.focus();
          return;
        }
        setErrorMessages(undefined);
        const newCodes = [...codes!];
        newCodes[index] = text;
        setCodes(newCodes);
        if (text !== "" && index < 5) {
          refs[index + 1]!.current?.focus();
        }
      };
      const handleVerify = () => {
        if (codes.length == 6 && JSON.stringify(codes) === JSON.stringify(['1', '2', '3', '4', '5', '6'])) {
            isVisible = false
            onClose();
        } else if (codes.length != 6) {
            setErrorMessages("OTP is required")
        } else {
            setErrorMessages("Invalid OTP")
        }
      };
    return (
    <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown" backdropOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
         <OTPInput
                    codes={codes!}
                    errorMessages={errorMessages}
                    onChangeCode={onChangeCode}
                    refs={refs} config={undefined}    
            />
        <Text>{errorMessages}</Text>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.pastelPurple,
    marginVertical: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CustomPopup;
