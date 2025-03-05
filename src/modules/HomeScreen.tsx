import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation"; // Import FontAwesome checkmark
import { LogoutModal } from "../components/bottomsheet";
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
   <Text>Logout</Text>
   <LogoutModal onLogout={ () => navigation.popTo("Login")}></LogoutModal>
      </>
  );
};
const styles = StyleSheet.create({
  text: {
    marginTop: 12
  }
});
export default HomeScreen;

// type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
// const SettingsScreen = () => {

//   return (
//     <View>
//       <Button title="Light Mode" onPress={() => updateTheme("light")} />
//       <Button title="Dark Mode" onPress={() => updateTheme("dark")} />
//       <Button title="System Default" onPress={() => updateTheme("system")} />
//     </View>
//   );
// };

// export default SettingsScreen;
