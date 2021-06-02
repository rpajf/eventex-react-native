import React from 'react';
import {View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
import {AuthNavigatorParamsList} from '../../types';
import {Container, ImageHeader, EventTitle} from './styles';

export interface EventInfo {
  navigation: StackNavigationProp<AuthNavigatorParamsList, 'EventPayment'>;
}

const CreateEvent: React.FC = ({navigation}) => {
  return <Container />;
};

export default CreateEvent;
