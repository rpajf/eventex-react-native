import React from 'react';
import {View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../types';

import {Container, ImageHeader, EventTitle, ImageWrapper} from './styles';

export interface CreateEvent {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'CreateEvent'>;
}

const CreateEvent: React.FC<CreateEvent> = ({navigation}) => {
  return (
    <Container>

      <EventTitle>Crie o seu proprio evento</EventTitle>
      <ImageWrapper/.
    </Container>
  );
};

export default CreateEvent;
