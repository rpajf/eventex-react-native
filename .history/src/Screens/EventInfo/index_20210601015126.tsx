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
      <Header>
        <MaterialCommunity name="arrow-left-bold" size={25} color="#fff" />
      </Header>
      <ImageWrapper>
        <ImageHeader source={require('../../assets/img/show.jpg')} />
      </ImageWrapper>
      <EventTitle>Tomorrowland</EventTitle>
    </Container>
  );
};

export default CreateEvent;
