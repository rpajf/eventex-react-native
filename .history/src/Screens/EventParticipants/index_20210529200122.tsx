import React from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';

import {Container, Header, NavButton} from './styles';

import {ScreenMainText, Small} from '../../components/Text';

interface Props {
  openModal
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
      <Button title="Navback" onPress={closeModal}>
        <Text>asdasd</Text>
      </Button>
    </Container>
  );
};
export default EventParticipants;
