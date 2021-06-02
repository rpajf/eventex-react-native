import React from 'react';
import {Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import {Container, MainText, UserProfileView, UserPhoto} from './styles';
import {Main} from '../CreateEvent/styles';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  return (
    <Container>
      <MainText>Dados do usuario</MainText>
        <UserProfileView>
          <UserP>
        </UserProfileView>
      <Text style={{color: '#fff'}}>Carlos Henrique Fabiano</Text>

      <Text>Eventos Inscritos</Text>

      <Text>Eventos Criados</Text>

    </Container>
  );
};

export default Profile;
