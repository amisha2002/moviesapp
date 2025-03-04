import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Colors from "../assets/colors/Colors"; // Adjust based on your project structure

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string; // New prop for dynamic background color
}

const FilledButton: React.FC<CustomButtonProps> = ({ title, onPress, isLoading, buttonStyle, textStyle, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle, { backgroundColor: backgroundColor || Colors.amaranthPurple }]}
      onPress={isLoading ? undefined : onPress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 58,
    borderRadius: 10,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FilledButton;
