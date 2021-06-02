import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Header, NavButton} from './styles';

import {ScreenMainText, Small} from '../../components/Text';

interface Props {
  openModal: () => void;
  closeModal: () => void;
}

const EventParticipants: React.FC<Props> = ({closeModal}: Props) => {
  return (
    <Container>
      <Header>
        <ScreenMainText>Usuarios cadastrados em:</ScreenMainText>
        <Small>Lista</Small>
      </Header>
      <NavButton onPress={closeModal}>Retornar</NavButton>
    </Container>
  );
};
export default EventParticipants;
