import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../modules/HomeScreen";
import DetailsScreen from "../modules/DetailsScreen";
import LoginScreen from "../modules/Login/LoginScreen";
import SplashScreen from "../modules/SplashScreen";
import SettingsScreen from "../modules/HomeScreen";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;  
  Details: { id?: number };
  Settings: undefined
// Passing params to Details screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ gestureEnabled: false, headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ 
            headerShown: true, 
            headerBackButtonDisplayMode: "minimal",
            headerTintColor: "black",
            headerTitle: "OTP Verification",
            headerTransparent: true // Removes the back button label (previous screen name)
          }} 
          initialParams={{ id: 0 }} />     
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;


export interface Navigation {
  params: any;
  navigate: (screen: string) => void;
  goBack: () => void;
  push: (screen: string) => void;
  replace: (screen: string) => void;
}