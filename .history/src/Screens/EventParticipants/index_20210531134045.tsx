import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

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
        <View style={styles.iconContainer}>
          <Entypo name="users" color="#e6e6e6" size={20} />
        </View>
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
  userRow: {
    height: 38,
    width: 38,
    position: 'relative',
    display: 'flex',

    backgroundColor: 'rgba(147, 150, 158, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#e6e6e6',
  },
});
export default EventParticipants;
