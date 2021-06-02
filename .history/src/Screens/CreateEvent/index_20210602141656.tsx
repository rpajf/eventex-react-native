import React from 'react';
import {View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../types';
import {} from '../../types'
import {Container, ImageHeader, EventTitle} from './styles';

export interface CreateEvent {
  navigation: StackNavigationProp<AuthNavigatorParamsList, 'CreateEvent'>;
  label?: string;
}

const CreateEvent: React.FC<CreateEvent> = ({navigation}) => {
  return <Container />;
};

export default CreateEvent;
