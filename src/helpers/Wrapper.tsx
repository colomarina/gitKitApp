import React, { useContext } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomStatusBar from '../components/StatusBar';
import colors from '../styles/layout/colors';
import { ThemeContext } from './ThemeManager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  base: {
    backgroundColor: colors.white,
  },
  darkMode: {
    backgroundColor: colors.black,
  },
});

const Wrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaProvider>
        <CustomStatusBar />
        <View style={[styles.container, styles[theme]]}>
          {children}
        </View>
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
};

export default Wrapper;
