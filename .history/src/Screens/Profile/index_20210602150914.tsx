import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import {Container, MainText, UserProfileView, UserPhoto, CreateEvent} from './styles';
import {Main} from '../CreateEvent/styles';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  return (
    <Container>
      <MainText>Dados do usuario</MainText>
      <UserProfileView>
        <UserPhoto source={require('../../assets/img/woman-avatar.png')} />
      <Text style={{color: '#fff'}}>Carlos Henrique Fabiano</Text>
      </UserProfileView>

      <Text>Eventos Inscritos</Text>
      <View></View>
      <Text>Eventos Criados</Text>
      <CreateEvent>Criar Evento</CreateEvent>
    </Container>
  );
};

export default Profile;
