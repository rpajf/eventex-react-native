import React, {useState} from 'react';
import {Text, View, StatusBar, ScrollView, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackNavigatorParamsList} from '../../types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  FieldWrapper,
  UserProfileView,
  UserPhoto,
  CreateEvent,
  EventImg,
  UserData,
  ImgInfo,
  FlatListWrapper,
  SectionTitle,
  EditProfileButton,
  IconWrapper,
} from './styles';

export interface HomeProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Profile'>;
}

const Profile: React.FC = () => {
  const images = [
    {
      title: 'Funk in rio',
      key: '1',
      src: require('../../assets/img/festival-green.jpg'),
    },
    {title: 'Palestra', key: '2', src: require('../../assets/img/tech2.jpg')},
    {
      title: 'Faculdade',
      key: '3',
      src: require('../../assets/img/music-event.png'),
    },
    {
      title: 'Funk in rio',
      key: '4',
      src: require('../../assets/img/festival-green.jpg'),
    },
    {title: 'Palestra', key: '5', src: require('../../assets/img/tech2.jpg')},
    {
      title: 'Faculdade',
      key: '6',
      src: require('../../assets/img/music-event.png'),
    },

    // {imgUrl: '../../assets/img/asian-festival.jpg', key: 1},a
    // {src: require('../../assets/img/tech.jpg'), key: '2'},
    // {src: require('../../assets/img/tech2.jpg'), key: '3'},
    // {src: require('../../assets/img/festival-green.jpg'), key: '4'},
  ];
  const renderItem = ({item}) => (
    <FlatListWrapper>
      <EventImg source={item.src} />
      <ImgInfo>{item.title}</ImgInfo>
    </FlatListWrapper>
  );
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#1e2630"
        translucent={true}
      />

      <UserProfileView>
        <UserPhoto source={require('../../assets/img/woman-avatar.png')} />
        <IconWrapper>
          <FontAwesomeIcon
            name="edit"
            size={20}
            color="#fff"
            style={{alignSelf: 'center'}}
          />
        </IconWrapper>
        <UserData>Ana paula</UserData>
        <UserData style={{fontSize: 14, color: '#cecdcd'}}>
          24 | Student
        </UserData>
      </UserProfileView>

      {/* <Text>Eventos Inscritos</Text> */}

      <SectionTitle
        style={{
          alignSelf: 'flex-start',
          color: '#cecdcd',
        }}>
        Eventos Criados
      </SectionTitle>
      <FieldWrapper>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          horizontal={true}
          // initialNumToRender={1}
        />
      </FieldWrapper>
      <SectionTitle
        style={{
          alignSelf: 'flex-start',
          color: '#cecdcd',
        }}>
        Eventos Inscritos
      </SectionTitle>
      <FieldWrapper>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          horizontal={true}
          // initialNumToRender={1}
        />
      </FieldWrapper>

      <CreateEvent>Criar Evento</CreateEvent>
    </Container>
  );
};

export default Profile;
