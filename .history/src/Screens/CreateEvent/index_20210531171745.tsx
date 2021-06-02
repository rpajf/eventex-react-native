import React from 'react';
import {View} from 'react-native';

import {Container, ImageHeader, EventTitle} from './styles';

const CreateEvent: React.FC = () => {
  return (
    <Container>
      <ImageHeader
        resizeMode="cover"
        source={require('../../assets/img/show.jpg')}>
        <EventTitle>Seus Eventos Favoritos Aqui!</EventTitle>
      </ImageHeader>
    </Container>
  );
};

export default CreateEvent;
