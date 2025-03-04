import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import GlobalStyles from "../styles/TextStyles";
import StringConstants from "../assets/constants/StringConstants";
import { TouchableOpacity } from "react-native";
import Colors from "../assets/colors/Colors";
import FilledButton from "../components/FilledButton";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome checkmark
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = async () => {
    const newState = !isChecked;
    setIsChecked(newState);
   // await AsyncStorage.setItem('rememberMe', JSON.stringify(newState));
  };

  return (
    <>
   <ImageBackground 
      source={require('../assets/imgs/images.jpeg')} // Ensure you have an image in assets folder
      style={GlobalStyles.backgroundImage}   
    >
    <Text style={GlobalStyles.titleHeadingImg}>{StringConstants.loginHeading}</Text>
    <Text style={GlobalStyles.subtitleHeading}>{StringConstants.loginSubHeading}</Text>
    <Text style={GlobalStyles.label}>{StringConstants.loginUsernameText}</Text>
    <TextInput 
      style={GlobalStyles.inputTextField}
      placeholder={StringConstants.loginUsernamePlaceholder}
      keyboardType="email-address"
      ></TextInput>
    <Text style={GlobalStyles.errorMessage}>{StringConstants.loginRequiredText}</Text>

    <Text style={GlobalStyles.label}>{StringConstants.loginPasswordText}</Text>
    <TextInput 
      style={GlobalStyles.inputTextField}
      placeholder={StringConstants.loginPasswordPlaceholder}
      ></TextInput>
    <Text style={GlobalStyles.errorMessage}>{StringConstants.loginRequiredText}</Text>
    <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={[GlobalStyles.checkBox, isChecked && GlobalStyles.checkedBox]}>
        {isChecked && <Icon name="check" size={12} color={Colors.amaranthPurple} />}
      </View>
      <Text style={styles.text}>Remember Me</Text>
    </TouchableOpacity>
    <View>
    <FilledButton title={"Login"} onPress={ () => {
    //  crashlytics().log("testing crashlytics")
    //  crashlytics().crash()
      navigation.push("Details", {id: 42})
    }
      }/>
      </View>
      </ImageBackground>
      </>
  );
};
const styles = StyleSheet.create({
  text: {
    marginTop: 12
  }
});
export default HomeScreen;
