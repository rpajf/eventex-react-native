import React from 'react';
import {View} from 'react-native';

import {Container, ImageHeader, EventTitle} from './styles';

const CreateEvent: React.FC = () => {
  return (
    <Container>
      <ImageHeader
        resizeMode="cover"
        source={require('../../assets/img/homeLogo.png')}>
        <ImageText>Seus Eventos Favoritos Aqui!</ImageText>
      </ImageHeader>{' '}
    </Container>
  );
};

export default CreateEvent;
