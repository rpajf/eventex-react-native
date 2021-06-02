import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import { Container } from './styles';


export interface HomeProps {
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Home'>;
}


const Profile: React.FC = () => {
  return <Container ></Container>;
};

export default Profile;
