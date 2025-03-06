
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';
import { darkTheme, ThemeProvider, useTheme } from './src/assets/ThemeContext';
export default function App() {
  useEffect(() => {
    const androidCredentials = {
      clientId: '231887638888-8thiosq317fet77p7farm4umkuqe62ba.apps.googleusercontent.com',
      appId: '1:231887638888:android:f2c31a10f80564f80986dd',
      apiKey: 'AIzaSyCwBE2i60NtUkPSqVe0OUDxy7XHP58YI6g',
      databaseURL: '', // Not provided in the given data
      storageBucket: 'contactsswiftuiapp.firebasestorage.app',
      messagingSenderId: '231887638888',
      projectId: 'contactsswiftuiapp',
    };   
    // Your secondary Firebase project credentials for iOS...
    const iosCredentials = {
      clientId: '231887638888-sk1hjumqjl3cjfd3rg1i6hp6f83unleq.apps.googleusercontent.com',
      appId: '1:231887638888:ios:96597186d41f24240986dd',
      apiKey: 'AIzaSyCgLbsY8imk4QeXwqs8oS3MXLbKWWvFigA',
      databaseURL: '', // No database URL found in the plist
      storageBucket: 'contactsswiftuiapp.firebasestorage.app',
      messagingSenderId: '231887638888',
      projectId: 'contactsswiftuiapp',
    };
    
    // Select the relevant credentials
    const credentials = Platform.select({
      android: androidCredentials,
      ios: iosCredentials,
    });
    if (!firebase.apps.length) {
      firebase.initializeApp(credentials);

    
    }
    console.log('Firebase initialized successfully');// Initialize Google Sign-In
    GoogleSignin.configure({
      webClientId: '231887638888-ac4d8hagq5sna7qfogggre8mih0l1btc.apps.googleusercontent.com', // Get this from Firebase console
    });
});
const { colors } = useTheme();
  return (
    <ThemeProvider>
        <StatusBar barStyle={colors === darkTheme ? 'light-content' : 'dark-content'} />
    <StackNavigation></StackNavigation>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

