import React, {useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';

import {
  Container,
  MainText,
  UserProfileView,
  UserPhoto,
  CreateEvent,
  EventImg,
  ImgInfo,
} from './styles';
import {Main} from '../CreateEvent/styles';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  const []
  return (
    <Container>
      <MainText>Dados do usuario</MainText>
      <UserProfileView>
        <UserPhoto source={require('../../assets/img/woman-avatar.png')} />
        <Text style={{color: '#fff'}}>Carlos Henrique Fabiano</Text>
      </UserProfileView>

      <Text>Eventos Inscritos</Text>
      <View>
        <Text>Eventos Criados</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <ScrollView horizontal={true}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EventImg
                key={1}
                source={require('../../assets/img/festival-green.jpg')}
              />
              <ImgInfo>Funk in Rio</ImgInfo>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EventImg
                key={1}
                source={require('../../assets/img/reading-event.png')}
              />
              <ImgInfo>Palestra motivacional</ImgInfo>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EventImg
                key={1}
                source={require('../../assets/img/university-event.png')}
              />
              <ImgInfo>Ciencias sem fronteira</ImgInfo>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <EventImg
                key={1}
                source={require('../../assets/img/tech2.jpg')}
              />
              <ImgInfo>Vendas 5.0</ImgInfo>
            </View>
          </ScrollView>
        </View>
      </View>
      <CreateEvent>Criar Evento</CreateEvent>
    </Container>
  );
};

export default Profile;
