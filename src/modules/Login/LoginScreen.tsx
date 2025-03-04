import React from 'react';
import { Text, View, Alert, Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { authUseCase } from '../Login/LoginUseCase';
import FilledButton from '../../components/FilledButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '../../styles/TextStyles';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Colors from '../../assets/colors/Colors';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const handleGoogleSignIn = async () => {
    try {
      await authUseCase.signInWithGoogle();
      navigation.replace('Home');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Sign-In Failed', error.message || 'Something went wrong');
    }
  };

  return (
    <SafeAreaProvider>
    {/* <ImageBackground
    style={styles.imgBkg}
    source={require('../../assets/imgs/loginbg.png')}>  */}
     <View style={styles.container}>
     
    <Image
      source={require('../../assets/imgs/splash-img.png')}
      style={{ width: 150, height: 150, marginTop: 120, }}/>
    <Text style={GlobalStyles.titleHeading}>Login</Text>
    <Text style={ GlobalStyles.subtitleHeading}>Sign in using Phone number</Text>
    </View>
    <TextInput placeholder='Enter phone number' style={GlobalStyles.inputTextField}></TextInput>
    <View style={styles.container}>
      <Text style={ GlobalStyles.subtitleHeading}>Or</Text>
      <Text style={ GlobalStyles.subtitleHeading}> Sign in using</Text>
      </View>
      <TouchableOpacity style={styles.touchable}>
        <Image
          source={require('../../assets/imgs/apple.png')}
          style={styles.image} />
      </TouchableOpacity>
      <FilledButton title="Google Sign-In" onPress={handleGoogleSignIn} backgroundColor='#6B6AAF'/>
      <FilledButton title="Facebook Sign-In" onPress={handleGoogleSignIn} backgroundColor='#6B6AAF'/>
      <FilledButton title="Apple Sign-In" onPress={handleGoogleSignIn} backgroundColor='#6B6AAF'/>
    {/* /</ImageBackground> */}
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  imgBkg: {
    resizeMode: "center",
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center'
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  image: {
    width: 45,
    height: 45,

  },
});
export default LoginScreen;

