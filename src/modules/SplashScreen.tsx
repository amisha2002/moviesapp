import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import Animated, { FadeIn } from "react-native-reanimated";
import Colors from "../assets/colors/Colors";

const SplashScreen = ({ navigation }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 1) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.replace("Login"); // Replace with your main screen
          }, 500);
          return 1;
        }
        return oldProgress + 0.1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated Fade-In Image */} 
      <Image source={require("../assets/imgs/splash-img.png")} style={styles.image} />
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
      {/* <Animated.View entering={FadeIn.duration(1000)}> */}
        <Progress.Bar progress={progress} width={200} color= {Colors.pastelPurple} />
      {/* </Animated.View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  progressContainer: {
    position: "absolute",
    bottom: 50, // Adjust bottom margin as needed
    alignItems: "center",
    width: "100%",
  },
});

export default SplashScreen;
