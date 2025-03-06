import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme, Appearance } from 'react-native';

// Define theme types
export type ThemeType = 'light' | 'dark' | 'system';

// Define theme colors
export const themes = {
  light: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007AFF',
    secondary: '#5856D6',
    card: '#F2F2F7',
    border: '#C7C7CC',
  },
  dark: {
    background: '#1C1C1E',
    text: '#FFFFFF',
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    card: '#2C2C2E',
    border: '#38383A',
  }
};

// Create the theme context
const ThemeContext = createContext<{
  themeMode: ThemeType;
  colors: typeof themes.light;
  setThemeMode: (mode: ThemeType) => void;
}>({
  themeMode: 'system',
  colors: themes.light,
  setThemeMode: () => {},
});

// Theme provider component
export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const systemTheme = useColorScheme() || 'light';
  const [themeMode, setThemeMode] = useState<ThemeType>('system');
  
  // Determine active colors based on theme mode
  const getActiveTheme = () => {
    if (themeMode === 'system') {
      return systemTheme === 'dark' ? themes.dark : themes.light;
    }
    return themeMode === 'dark' ? themes.dark : themes.light;
  };
  
  const [colors, setColors] = useState(getActiveTheme());
  
  // Update colors when theme mode changes
  useEffect(() => {
    setColors(getActiveTheme());
  }, [themeMode, systemTheme]);
  
  // Listen for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (themeMode === 'system') {
        setColors(colorScheme === 'dark' ? themes.dark : themes.light);
      }
    });
    
    return () => subscription.remove();
  }, [themeMode]);
  
  return (
    <ThemeContext.Provider value={{ themeMode, colors, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme
export const useTheme = () => {
  return useContext(ThemeContext);
};