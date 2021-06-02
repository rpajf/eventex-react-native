import React from 'react';
import {View} from 'react-native';

import {Container, Header} from './styles';

import {ScreenMainText, Small} from '../../components/Text';

const EventParticipants: React.FC = () => {
  return (
    <Container>
      <Header>
        <ScreenMainText>Usuarios cadastrados em:</ScreenMainText>
        <Small>Lista</Small>
      </Header>
    </Container>
  );
};
export default EventParticipants;
