import React from 'react';
import {View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../types';

import {Container, ImageHeader, EventTitle, ImageWrapper, Main,CreateEventInput,} from './styles';

export interface CreateEvent {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'CreateEvent'>;
}

const CreateEvent: React.FC<CreateEvent> = ({navigation}) => {
  return (
    <Container>

      <ImageWrapper />
      <Main>

      </Main>
    </Container>
  );
};

export default CreateEvent;
