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

const ListImage = ({item}) => {
  return <EventImg source={{uri: item.uri}} />;
};

const Profile: React.FC = () => {
  const images = [
    {key: '1', src: require('../../assets/img/festival-green.jpg')},
    {key: '2', src: require('../../assets/img/tech2.jpg')},
    {key: '3', src: require('../../assets/img/music-event.png')},

    // {imgUrl: '../../assets/img/asian-festival.jpg', key: 1},a
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
            renderItem={({item}) => <ListImage item={item.src} />}
          />

          <View
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
        </View>
      </View>
      <CreateEvent>Criar Evento</CreateEvent>
    </Container>
  );
};

export default Profile;
