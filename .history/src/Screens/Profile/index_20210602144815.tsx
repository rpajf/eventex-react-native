import React from 'react';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import {Container, MainText} from './styles';
import {Main} from '../CreateEvent/styles';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  return (
    <Container>
      <MainText>Dados do usuario</MainText>

      <Text style={{color: '#fff'}}>Carlos Henrique Fabiano</Text>

      <

    </Container>
  );
};

export default Profile;
