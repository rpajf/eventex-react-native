import React from 'react';
import {StatusBar} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  ImageHeader,
  EventTitle,
  ImageWrapper,
  Header,
  EventContent
} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header>
        <MaterialCommunity name="arrow-left-bold" size={25} color="#fff" />
      </Header>
      <ImageWrapper>
        <ImageHeader source={require('../../assets/img/show.jpg')} />
        <EventTitle>Tomorrowlandsad</EventTitle>
        <EventTitle>Tomorrowlandsad</EventTitle>

        <EventTitle>Tomorrowlandsad</EventTitle>
      ,
      </ImageWrapper>

    </Container>
  );
};

export default CreateEvent;
