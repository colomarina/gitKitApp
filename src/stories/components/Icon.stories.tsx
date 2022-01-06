import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Icon from '../../components/Icon';
import Wrapper from '../../helpers/Wrapper';

const container = {
  margin: 20,
};

storiesOf('Icon', module)
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => (
    <View style={{ alignItems: 'center' }}>
      <Icon name="myAccount" color="black950" size={25} containerStyles={container} />
      <Icon name="delete" color="red" containerStyles={container} />
      <Icon name="time" color="green200" size={100} containerStyles={container} />
      <Icon name="ingresarRetirarDinero" color="blue600" size={200} containerStyles={container} />
    </View>
  ));
