import React from 'react';
import {StatusBar} from 'react-native';

import {Container, ImageHeader, EventTitle, ImageWrapper} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <ImageHeader source={require('../../assets/img/show.jpg')} />
      <EventTitle>Seus Eventos Favoritos Aqui!</EventTitle>
    </Container>
  );
};

export default CreateEvent;
