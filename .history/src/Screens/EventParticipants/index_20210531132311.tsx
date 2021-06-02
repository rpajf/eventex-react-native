import React from 'react';
import {StatusBar} from 'react-native';

import {Container, Header, NavButton} from './styles';
import Entypo from 'react-native-vector-icons/MaterialIcons';Entypo
import {ScreenMainText, Small} from '../../components/Text';
import {HorizontalLine} from '../../components/Line';



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
        <ScreenMainText style={{color: '#e6e6e6'}}>
          Usuarios cadastrados em:
        </ScreenMainText>
        {/* <Small>Lista</Small> */}
      </Header>
      <HorizontalLine />
      <NavButton onPress={closeModal}>Retornar</NavButton>
    </Container>
  );
};
export default EventParticipants;
