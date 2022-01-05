import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../helpers/ThemeManager';
import getStyles from '../styles/components/Button';
import { ButtonType } from '../types/components/Button';

const ButtonComponent = ({
  children,
  onPress,
  variant,
  size = 'normal',
  disabled,
  containerStyle = {},
  textStyle = {},
  activeOpacity = 0.8,
}: ButtonType) => {
  const { theme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container[variant],
        styles.container[size],
        disabled ? styles.disabled.container[variant] : '',
        containerStyle,
      ]}
    >
      <Text
        style={[
          styles.text[variant],
          styles.text[size],
          disabled ? styles.disabled.text[variant] : '',
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
