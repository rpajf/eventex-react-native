import React from 'react';
import {View} from 'react-native';

import {Container, ImageHeader, EventTitle} from './styles';

const CreateEvent: React.FC = () => {
  return (
    <Container>
      <HomeImg
        resizeMode="cover"
        source={require('../../assets/img/homeLogo.png')}>
        <ImageText>Seus Eventos Favoritos Aqui!</ImageText>
      </HomeImg>{' '}
    </Container>
  );
};

export default CreateEvent;
