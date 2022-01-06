import React from 'react';
import { View } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons/';
import icoMoonConfig from '../../android/app/src/main/assets/selection.json';
import colors from '../styles/layout/colors';
import { IconType } from '../types/components/Icon';

const NewIcon = createIconSetFromIcoMoon(icoMoonConfig);

const Icon = ({ name, size = 50, color, containerStyles = {} }: IconType) => (
  <View style={containerStyles}>
    <NewIcon name={name} size={size} color={colors[color]} />
  </View>
);

export default Icon;
