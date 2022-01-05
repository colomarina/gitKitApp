import React, { useContext } from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../helpers/ThemeManager';
import styles from '../styles/components/StatusBar';

const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[{ height: insets.top }]}>
      <StatusBar
        animated
        backgroundColor={styles[theme].backgroundColor}
        barStyle={theme === 'base' ? 'light-content' : 'dark-content'}
      />
    </View>
  );
};

export default CustomStatusBar;
