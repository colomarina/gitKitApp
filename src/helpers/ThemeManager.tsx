import React, { useState, createContext } from 'react';
import { StatusBar } from 'react-native';

export type ContextType = {
  theme: 'base' | 'darkMode';
  toggleTheme?: (selectedTheme: any) => void;
};

export const ThemeContext = createContext<ContextType>({ theme: 'base' });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('base');

  const toggleTheme = selectedTheme => {
    const themeActionList = {
      base: () => {
        setTheme('base');
        StatusBar.setBarStyle('light-content');
      },
      darkMode: () => {
        setTheme('darkMode');
        StatusBar.setBarStyle('dark-content');
      },
    };
    themeActionList[selectedTheme]();
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
