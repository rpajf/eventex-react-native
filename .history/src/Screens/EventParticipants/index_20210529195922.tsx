import React from 'react';
import {View, Button} from 'react-native';

import {Container, Header, NavButton} from './styles';

import {ScreenMainText, Small} from '../../components/Text';

interface Props {
  closeModal: () => void;
}

const EventParticipants: React.FC<Props> = ({closeModal}: Props) => {
  return (
    <Container>
      <Header>
        <ScreenMainText>Usuarios cadastrados em:</ScreenMainText>
        <Small>Lista</Small>
      </Header>
      <NavButton onPress={() => closeModal}>Retornar</NavButton>
      <Button>asd</Button>
    </Container>
  );
};
export default EventParticipants;
