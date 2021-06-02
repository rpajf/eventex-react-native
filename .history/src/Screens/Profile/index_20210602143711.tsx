import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import { Container, MainText } from './styles';


export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}


const Profile: React.FC = () => {
  return <Container ></Container>;
};

export default Profile;
