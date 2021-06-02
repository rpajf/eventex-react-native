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
      <StatusBar
        hidden={false}
        barStyle="light-content"
        translucent={true}
        backgroundColor="#8C52FF"
      />
      <Header>
        <ScreenMainText>Usuarios cadastrados em:</ScreenMainText>
        {/* <Small>Lista</Small> */}
      </Header>
      <NavButton onPress={closeModal}>Retornar</NavButton>
    </Container>
  );
};
export default EventParticipants;
