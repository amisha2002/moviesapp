// src/components/ThemeSwitcher.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme, ThemeType } from '../assets/ThemeContext';

const ThemeSwitcher = () => {
  const { themeMode, setThemeMode, colors } = useTheme();
  
  const themes: ThemeType[] = ['light', 'dark', 'system'];
  
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Select Theme</Text>
      <View style={styles.buttonsContainer}>
        {themes.map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[
              styles.button,
              { backgroundColor: colors.card, borderColor: colors.border },
              themeMode === mode && { backgroundColor: colors.primary }
            ]}
            onPress={() => setThemeMode(mode)}
          >
            <Text
              style={[
                styles.buttonText,
                { color: themeMode === mode ? '#FFF' : colors.text }
              ]}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    minWidth: 80,
  },
  buttonText: {
    fontWeight: '500',
  },
});

export default ThemeSwitcher;