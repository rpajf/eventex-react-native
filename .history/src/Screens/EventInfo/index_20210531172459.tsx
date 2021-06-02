import React from 'react';
import {StatusBar} from 'react-native';

import {Container, ImageHeader, EventTitle} from './styles';

const CreateEvent: React.FC = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      />
      <ImageHeader
        resizeMode="cover"
        source={require('../../assets/img/show.jpg')}>
        <EventTitle>Seus Eventos Favoritos Aqui!</EventTitle>
      </ImageHeader>
    </Container>
  );
};

export default CreateEvent;
