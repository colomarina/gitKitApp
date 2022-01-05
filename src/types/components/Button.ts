import { ReactNode } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export type TextLabelType = {
  styles: Object;
  text: string;
};

export type ButtonType = {
  variant: 'primary' | 'secondary' | 'link' | 'btn_popover' | 'borderless';
  size?: 'normal' | 'small';
  activeOpacity?: number;
  disabled?: boolean;
  children: ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  containerStyle?: Object;
  textStyle?: Object;
};
