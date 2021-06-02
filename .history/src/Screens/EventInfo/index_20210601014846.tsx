import React from 'react';
import {StatusBar} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  ImageHeader,
  EventTitle,
  ImageWrapper,
  Header,
} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Header >
        <MaterialCommunity icon="arrow-left-bold-outline" size=>
      </Header>
      <ImageWrapper>
        <ImageHeader source={require('../../assets/img/show.jpg')} />
      </ImageWrapper>
      <EventTitle>Seus Eventos Favoritos Aqui!</EventTitle>
    </Container>
  );
};

export default CreateEvent;
