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
  UserData,
  ImgInfo,
} from './styles';
import {Main} from '../CreateEvent/styles';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  const images = [
    {data: [
      {key: '1',
      src: require('../../assets/img/tech.jpg')},
      {key: '1',
      src: require('../../assets/img/tech.jpg')},{key: '1',
      src: require('../../assets/img/tech.jpg')}
    ]}
    {imgUrl: '../../assets/img/asian-festival.jpg', key: 1},
    // {src: require('../../assets/img/tech.jpg'), key: '2'},
    // {src: require('../../assets/img/tech2.jpg'), key: '3'},
    // {src: require('../../assets/img/festival-green.jpg'), key: '4'},
  ];
  return (
    <Container>
      <MainText>Dados do usuario</MainText>
      <UserProfileView>
        <UserPhoto source={require('../../assets/img/woman-avatar.png')} />
        <UserData>Ana paula</UserData>
      </UserProfileView>

      <Text>Eventos Inscritos</Text>
      <View>
        <Text>Eventos Criados</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <EventImg source={{uri: item.imgUrl}} />}>
            )
          </FlatList>
          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <EventImg source={require('../../assets/img/festival-green.jpg')} />
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
            <EventImg key={1} source={require('../../assets/img/tech2.jpg')} />
            <ImgInfo>Vendas 5.0</ImgInfo>
          </View> */}
        </View>
      </View>
      <CreateEvent>Criar Evento</CreateEvent>
    </Container>
  );
};

export default Profile;
