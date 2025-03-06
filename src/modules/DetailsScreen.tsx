import React, { RefObject, useRef, useState } from "react";
import { View, Text, KeyboardAvoidingView,
        SafeAreaView, TextInput,
        StyleSheet } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/StackNavigation";
import { OTPInput } from "../components/OTPView";
import GlobalStyles from "../styles/TextStyles";
import FilledButton from "../components/FilledButton";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
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
  
    const [errorMessages, setErrorMessages] = useState<string[]>();
  
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
  
    async function verifyPhoneNumberAndProgress() {
      const fullCode = codes!.join("");
      try {
        // await signUp?.attemptPhoneNumberVerification({ code: fullCode });
      } catch (err: unknown) {
        // handle the error 
      }
    }
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
      <View style={styles.innerContainer}>
        <View style={styles.verificationContainer}>
          <Text style={GlobalStyles.titleHeading}>Enter verification code</Text>
          <Text style={GlobalStyles.subtitleHeading}>
            We just texted the code to your phone number
          </Text>
        </View>

        {/* OTP Input Component */}
        <OTPInput
            codes={codes!}
            errorMessages={errorMessages}
            onChangeCode={onChangeCode}
            refs={refs} config={undefined}        />
        <FilledButton
          title="Verify"
          onPress={ 
            () => { navigation.pop()}
          }
          ></FilledButton>
        <View style={styles.detailsContainer}>
          <Text>Details Screen</Text>
          <Text>Item ID: {route.params.id}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
};

// **Styles**
const styles = StyleSheet.create({
container: {
  flex: 1
},
keyboardView: {
  flex: 1,
},
innerContainer: {
  flex: 1,
  flexDirection: "column",
  gap: 16, // Native doesn't support "gap", will be ignored
  padding: 16,
},

stepText: {
  textAlign: "center",
  fontSize: 18,
  color: "black",
},
verificationContainer: {
  alignItems: "baseline",
  marginBottom: 16,
},

detailsContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
});


export default DetailsScreen;
