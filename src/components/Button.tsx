import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@aws-amplify/ui-react';

interface LogoutModalProps {
  onLogout?: () => void;
  onCancel?: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ 
  onLogout = () => {},
  onCancel = () => {}
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerGroup}>
          <Text style={styles.title}>Logout</Text>
          <Text style={styles.subtitle}>
            Are you sure you want to logout?
          </Text>
        </View>
        
        <View style={styles.buttonGroup}>
          <Button 
            style={styles.logoutButton}
            onClick={onLogout}
            variation="primary"
          >
            Log Out
          </Button>

          <Button 
            style={styles.cancelButton}
            onClick={onCancel}
            variation="link"
          >
            Cancel
          </Button>
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
    padding: 16,
    width: 393,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: 316,
    gap: 38,
    alignItems: 'center',
  },
  headerGroup: {
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    color: '#3B2A6F',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#A4A9AE',
    textAlign: 'center',
  },
  buttonGroup: {
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
  cancelButton: {
    backgroundColor: '#A4A9AE26',
    borderRadius: 10,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
