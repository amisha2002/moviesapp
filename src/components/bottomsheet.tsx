import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LogoutModalProps {
  onLogout?: () => void;
  onCancel?: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  onLogout = () => {},
  onCancel = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Logout</Text>
          <Text style={styles.subtitleText}>
            Are you sure you want to logout?
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={onLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={onCancel}
            activeOpacity={0.8}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    padding: 20,
   width: '100%',
    alignSelf: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    gap: 38,
  },
  headerContainer: {
    alignItems: 'center',
    gap: 12,
  },
  titleText: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    color: '#3B2A6F',
    textAlign: 'center',
  },
  subtitleText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#A4A9AE',
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 24,
    width: '100%',
  },
  logoutButton: {
    backgroundColor: '#3B2A6F',
    borderRadius: 10,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontFamily: 'Sofia Pro',
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  cancelButton: {
    backgroundColor: '#A4A9AE26',
    borderRadius: 10,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontFamily: 'Sofia Pro',
    fontSize: 20,
    fontWeight: '500',
    color: '#8E949A',
  },
});
