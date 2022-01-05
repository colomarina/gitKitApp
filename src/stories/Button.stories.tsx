import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';
import { ThemeProvider } from '../helpers/ThemeManager';
import Wrapper from '../helpers/Wrapper';

storiesOf('Button', module)
  .addDecorator(getStory => (
    <ThemeProvider>
      <Wrapper>{getStory()}</Wrapper>
    </ThemeProvider>
  ))
  .add('Primary', () => (
    <View>
      <Button onPress={() => { }} variant="primary">
        Default size
      </Button>
      <Button
        onPress={() => { }}
        variant="primary"
        size="small"
        containerStyle={{ marginTop: 10 }}>
        Small size
      </Button>
    </View>
  ))
  .add('Secondary', () => (
    <View>
      <Button onPress={() => { }} variant="secondary">
        Default size
      </Button>
      <Button
        onPress={() => { }}
        variant="secondary"
        size="small"
        containerStyle={{ marginTop: 10 }}>
        Small size
      </Button>
    </View>
  ));
