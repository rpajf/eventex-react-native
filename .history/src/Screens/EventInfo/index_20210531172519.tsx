import React from 'react';
import {StatusBar} from 'react-native';

import {Container, ImageHeader, EventTitle} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <ImageHeader
        resizeMode="cover"
        source={require('../../assets/img/show.jpg')}>
        <EventTitle>Seus Eventos Favoritos Aqui!</EventTitle>
      </ImageHeader>
    </Container>
  );
};

export default CreateEvent;
