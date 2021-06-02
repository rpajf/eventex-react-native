import React from 'react';
import {StatusBar, View} from 'react-native';

import {Container, Header, NavButton} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
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
        <Entypo name="users" color="#e6e6e6" size={20} />
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
const styles = StyleSheet.create({
  thumbnail: {
    height: 68,
    width: 68,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #333',
    borderRadius: '50%',
  },
});
export default EventParticipants;
